import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  SimpleGrid,
  Box,
  Center,
  GridItem,
  Select,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { ViewIcon } from "@chakra-ui/icons";
import { jsPDF } from "jspdf";
import $, { merge } from "jquery";
import AwardCategories from "./AwardCategories";
import Gender from "./Gender";
import { useState } from "react";
import axios from "axios";
import Category from "./Category";

// const FormData = require('form-data');
// const [email,setEmail]=useState('')

const Details = () => {
  // var pdf_file;
  const [pdfFile, setPdfFile] = useState(null);
  const [fieldsPdf, setFieldsPdf] = useState(null);
  const [receiptPdf, setReceiptPdf] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [emailto, setEmail] = useState("");
  const [fieldsUrl, setFieldsUrl] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [checkVal2, setCheckVal2] = useState(Boolean(false));
  const [checkVal, setCheckVal] = useState(Boolean(false));
  const { isSubmitted, onFormSubmit } = useDisclosure({ defaultIsOpen: false });
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  function verify() {
    var applicantName = $("#name").val().trim();
    var sem = $("#sem").val().trim();
    var dept = $("#department").val().trim();
    var insti = $("#institute").val().trim();
    var award = $("#Category").val().trim();
    var email = $("#email").val().trim();
    var gender = $("#Gender").val().trim();
    // console.log("Verifying fields ");
    if (
      applicantName == "" ||
      dept == "" ||
      insti == "" ||
      (award == "") | (pdfUrl == null) ||
      receiptPdf == null ||
      !checkVal ||
      !checkVal2
    ) {
      return false;
    }
    return true;
  }

  console.log(emailto);
  async function send() {
    var formData = new FormData();
    formData.append("userDoc", receiptPdf);
    formData.append("userDoc", fieldsPdf);
    formData.append("userDoc", pdfFile);
    // formData.append("userDoc",emailto);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await fetch("https://tonythomas.xyz/mergepdf", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.status != 202) {
          alert("Form submitted Successfully !!!");
          console.log("Success");
          window.location.reload(false);
        } else {
          alert("Please Resubmit Form!!!");
        }
      });
    } catch (err) {
      alert("Backend is Down. Contact Administrator");
      console.log(err);
    }
  }
  const secondaryTextColor = "black";

  const handleChange = async (e) => {
    e.preventDefault();
    var pdf_file = e.target.files[0];
    setPdfFile(pdf_file);
    setPdfUrl(URL.createObjectURL(pdf_file));
    var doc = jsPDF();
    var pos = 20;
    var applicantName = $("#name").val().trim();
    // if (document.getElementById("sem").val) {
    var sem = $("#sem").val();
    // }
    var dept = $("#department").val().trim();
    var insti = $("#institute").val().trim();
    var award = $("#Category").val().trim();
    var category = $("#Categoryspecify").val().trim();
    var gender = $("#Gender").val().trim();
    var contact = $("#contactNo").val().trim();
    var email = $("#email").val().trim();
    var role = $("#SelectOptions").find("#applicant-role").val();
    doc.text(20, 20, "Name : " + applicantName);
    if (sem.length != 0) {
      doc.text(20, 30, "Semester : " + sem);
    } else {
      doc.text(20, 30, "Semester : Not filled");
    }
    doc.text(20, 40, "Department : " + dept);
    doc.text(20, 50, "Institute : " + insti);
    doc.text(20, 60, "Award Category : " + award);
    doc.text(20, 70, "Category : " + category);
    doc.text(20, 80, "Contact Details (Mobile Number and Email) : " + contact);
    doc.text(20, 90, "Gender : " + gender);
    doc.text(20, 100, "Email Details (Email) : " + email);
    if (!(typeof role === "undefined")) {
      doc.text(20, 110, "Applicant Role : " + role);
    }
    var blobPDF = new Blob(
      [doc.output("blob", { filename: "userDetails.pdf" })],
      { type: "application/pdf" }
    );
    var blobUrl = URL.createObjectURL(blobPDF);
    setFieldsPdf(blobPDF);
    setFieldsUrl(blobUrl);
  };
  const handleReceipt = (e) => {
    e.preventDefault();
    setReceiptPdf(e.target.files[0]);
  };
  const checkBoxChange = (e) => {
    e.preventDefault();
    setCheckVal(!checkVal);
  };
  const handleCheckDecision = (e) => {
    e.preventDefault();
    setCheckVal2(!checkVal2);
  };

  // const sendEmail = async () => {
  //     const email = document.getElementById("email").value;
  //     console.log(emailto)
  //     await fetch("http://localhost:3000/email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: emailto,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error(error));
  //   }

  return (
    <Box>
      <Center
        backgroundColor="whiteAlpha.800"
        padding="10px"
        spacing={10}
        alignItems="center"
      >
        <form id="registration-form">
          <SimpleGrid
            boxShadow="dark-lg"
            borderColor="black"
            borderEnd="ActiveBorder"
            spacing="10px"
            padding="50px"
            border="2px"
            columns={1}
            rowGap={6}
          >
            <GridItem>
              <Heading textColor={secondaryTextColor} size="2xl">
                Registration/Proposal Submission Form
              </Heading>
              <Text fontSize={"20px"} textColor={secondaryTextColor} mt={2}>
                All candidates are requested to upload their nomination (in the
                prescribed format) within two days of registration fees paymet
                for ease of functioning.
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Name of the Applicant
                </FormLabel>
                <Input id="name" placeholder="ABC" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Department Name of the Applicant
                </FormLabel>
                <Input id="department" placeholder="Computer" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Institute Name of Applicant
                </FormLabel>
                <Input id="institute" placeholder="FCRIT" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel textColor={secondaryTextColor}>
                  Semester (applicable only for students)
                </FormLabel>
                <Input id="sem" placeholder="6" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <Gender isRequired />
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>
                  Contact No.
                </FormLabel>
                <Input id="contactNo" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel textColor={secondaryTextColor}>Email Id</FormLabel>
                <Input
                  id="email"
                  value={emailto}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <Input id="email" type="email" onChange={updateEmail} /> */}
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <AwardCategories isRequired />
            </GridItem>

            <GridItem colSpan={2}>
              <Category isRequired />
            </GridItem>

            <GridItem id="SelectOptions" colSpan={2}></GridItem>
            <GridItem id="receiptPdf" colSpan={2}>
              <FormControl isRequired={true}>
                <FormLabel>
                  Upload Transaction Receipt here <b>(Upload pdf only)</b>
                </FormLabel>
                <Input
                  isRequired
                  accept="application/pdf"
                  type="file"
                  id="receiptDoc"
                  onChange={handleReceipt}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl isRequired={true}>
                <FormLabel>
                  Upload proposal as a single pdf here
                  <br />
                  The Please refer Proposal Templates uploaded in the Templates
                  tab{" "}
                </FormLabel>
                <Input
                  isRequired
                  accept="application/pdf"
                  type="file"
                  id="userDoc"
                  onChange={handleChange}
                />
                <br></br>
                <Button
                  mt="5"
                  mb="5"
                  size="lg"
                  onClick={() => {
                    if (pdfUrl === null) {
                      toast({
                        title: "PDF has not been uploaded yet!",
                        description: "Please upload PDF for Preview",
                        status: "info",
                        duration: 3000,
                        isClosable: true,
                      });
                    } else {
                      onOpen();
                    }
                  }}
                >
                  Preview&nbsp;&nbsp;
                  <ViewIcon />
                </Button>
              </FormControl>
              <br></br>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                scrollBehavior="inside"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>PDF Document Preview</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <iframe src={pdfUrl} width="500px" height="700px" />
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <Checkbox onChange={checkBoxChange} isRequired>
                    I have checked all the details. I confirm that the details
                    are true and I have uploaded all the documents.
                  </Checkbox>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <Checkbox onChange={handleCheckDecision} isRequired>
                    I/We hereby agree to the final decision of judges.
                  </Checkbox>
                </FormControl>
              </GridItem>
              <br></br>
              <Button
                mt="5"
                mb="5"
                bgColor="green.500"
                onClick={() => {
                  if (verify() == true) {
                    send();
                  } else {
                    toast({
                      title: "Incomplete Form",
                      description: "Please Fill all the details",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                }}
                size="lg"
              >
                Submit
              </Button>
            </GridItem>
            <br />
          </SimpleGrid>
        </form>
      </Center>
    </Box>
  );
};

export default Details;
