var express = require('express')
var multer = require('multer')
var cors = require('cors')
// var nodemon = require
var fs = require('fs');
// var merge = require('easy-pdf-merge');
var app = express();
var { PDFDocument, StandardFonts } = require('pdf-lib');
var path = require('path');
var dotenv= require('dotenv');
var {PDFParser} = require('pdf-parse');
var nodemailer = require("nodemailer");
var promisify = require("es6-promisify");

var nodeoutlook = require('nodejs-nodemailer-outlook')




app.options('*', cors())
dotenv.config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Content-Type, Accept"');
  next();
});


const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any 
  console.log(req.file, req.body)
});



app.post('/upload', (req, res) => {
  console.log("request body : ", req.files);
  const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      const dirName = "docs/" + Date.now() + '-' + Math.round(Math.random() * 1E9)
      fs.mkdirSync(dirName);
      console.log(dirName);
      cb(null, dirName);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })

  const upload = multer({ storage: storage }).any();
  upload(req, res, function (err) {
    console.log("request file : ", req.files);
    if (err instanceof multer.MulterError) {
      console.log("Err ", err)
      return
    } else if (err) {
      console.log("err", err)
      // An unknown error occurred when uploading.
    }
    // console.log("res",res)
    res.send({ "ret": "success" })
    // Everything went fine.
  })
});




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/data/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + file.originalname
    );
  },
});

var dir = "public";
var subDirectory = "public/data/uploads";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

  fs.mkdirSync(subDirectory);
}

var mergepdffilesupload = multer({ storage: storage })

app.get('/test', function (req, res) {
  res.json({ 'status': 'working' });
  res.status(200)
});
// app.post('/mergepdf', mergepdffilesupload.array('userDoc', 3), (req, res) => {
//   console.log("post call working")
//   // console.log("files",req);

//   const files = []
//   outputFilePath = dir + "/response/response_" + Date.now() + ".pdf";
//   if (req.files && req.files.length == 3) {

//     req.files.forEach(file => {
//       console.log(file.path)
//       var filePath = file.path;
//       console.log(file.path)
//       if (!filePath.endsWith(".pdf")) {
//         fs.rename(filePath, filePath + ".pdf", () => {
//           console.log("\nFile Renamed!\n");
//         });
//         filePath = filePath + ".pdf";
//       }
//       files.push(filePath)
//     });
//   //   let transporter = nodemailer.createTransport({
//   //     service: 'gmail',
//   //     auth: {
//   //         user: 'kulkarni.vithi@gmail.com',
//   //         pass: 'rhkrgcmfwduaomtu'
//   //     }
//   // });

//   // var mailOptions = {
//   //   from: 'kulkarni.vithi@gmail.com',
//   //   to:"",
//   //   subject: 'Sending Email using Node.js',
//   //   text: 'That was easy!'
//   // };
  
//   // transporter.sendMail(mailOptions, function(error, info){
//   //   if (error) {
//   //     console.log(error);
//   //   } else {
//   //     console.log('Email sent: ' + info.response);
//   //   }
//   // });

//     merge(files, outputFilePath, function (err) {
//       files.forEach(file => {
//         fs.unlink(file, function (err) {
//           if (err) {
//             res.status(404).json({ error: 'Improper files received!' });
//             throw err;
//           }
//           // if no error, file has been deleted successfully
//           console.log('File deleted!');

//         });
//       });

//       if (!err) {
//         console.log('Success');
//         res.status(202).json({ msg: 'Response recorded successfully' });
//       }
//       else {
//         res.status(404).json({ error: 'File handling error!' });
//         return console.log(err);
//       }
//     });

//   }
//   else {
//     files.forEach(file => {
//       fs.unlink(file, function (err) {
//         if (err) {
//           res.status(404).json({ error: 'Improper files received!' });
//           throw err;
//         }
//         // if no error, file has been deleted successfully
//         console.log('File deleted!');

//       });
//     });
//     res.status(404).json({ error: 'Invalid request' });
//   }
// });




app.post('/mergepdf', mergepdffilesupload.array('userDoc', 3), async (req, res) => {
  console.log("post call working");

  

  const files = [];
  let outputPdf = await PDFDocument.create();

  // const email = req.body.email;

  if (req.files && req.files.length == 3) {
    for (let file of req.files) {
      let data = fs.readFileSync(file.path);

      if (!file.path.endsWith(".pdf")) {
        fs.renameSync(file.path, file.path + ".pdf");
        file.path = file.path + ".pdf";
        data = fs.readFileSync(file.path);
      }

      let pdf = await PDFDocument.load(data , { ignoreEncryption: true });
      let copiedPages = await outputPdf.copyPages(pdf, pdf.getPageIndices());

      copiedPages.forEach((page) => {
        outputPdf.addPage(page);
      });

      files.push(file.path);
    }

    let mergedPdf = await outputPdf.save();

    const filePath = path.join(__dirname, 'public', 'response', `response_${Date.now()}.pdf`);
    fs.mkdirSync(path.join(__dirname, 'public', 'response'), { recursive: true }, (err) => {
      if (err) throw err;
    });

    fs.writeFile(filePath, mergedPdf, (err) => {
      if (err) {
        res.status(404).json({ error: 'File handling error!' });
        return console.log(err);
      }
      console.log('File saved successfully!');
      res.download(dir + "/response/response_" + Date.now() + ".pdf", (err) => {
        if (err) {
          console.log(err);
          res.status(404).json({ error: 'Download error!' });
        }
        else{
        console.log('File download complete!');
        }
      });
  

      let transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: "supportiei@fcrit.ac.in",
            // pass: "rhkrgcmfwduaomtu",
            pass: "support@2023"
        }
    });

    var mailOptions = {
      from: "supportiei@fcrit.ac.in",
      to: "srushtikokate03@gmail.com",
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      attachments: [
        {
          filename: `response_${Date.now()}.pdf`,
          content: mergedPdf
        }
      ]
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    });
  }
});



var server = app.listen(3000, () => {
  console.log("port used", server.address().port);
})