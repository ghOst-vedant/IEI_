import Head from 'next/head'
import Image from 'next/image'
import { Center, Text, SimpleGrid } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from './Card';
import NavBa from '../components/Navba';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Committees- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <VideoBackground />
      <Header />
      <NavBa />
      <Center fontSize="5xl" fontWeight="bold" color="black">
        Organising Committee
      </Center>
      <br />
      <br />
      <SimpleGrid paddingBottom="20" columns={2} spacingX='20px' spacingY='20px'>
        <Card des1={"Chair,"} des2={"IEI BLC FCRIT Excellence "} des3={"Award"} des4={"Managing Committee  "} des5={"Member,(IEI BLC)"} des6={"Dean (Faculty) and Head "} des7={"(Mech),FCRIT, Vashi"} personName={"Dr. Nilaj Deshmukh"} image="/photos/dr-nilaj-deshmukh.jpeg" />
        <Card des1={"Co-Chair,"} des2={"IEI BLC FCRIT Excellence "} des3={"Award"} personName={"Mrs. M. Kiruthika"} des4={"Associate Professor, Comp.  "} des5={"Engg. Dept.,"} des6={"FCRIT, Vashi"} image="/photos/km.jpg" />
      </SimpleGrid>
      <br />
      <br />
      <div className="App">
        <table>
          <tr>
            <th>Sr.No</th>
            <th>Committee</th>
            <th>Roles and Responsibility</th>
            <th>Faculty In – Charge</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Certificate and Trophy</td>
            <td>1. Printing & Distribution of Certificate<br />2.Coordinating and taking decision towards trophy.</td>
            <td>Dr. Bindu R (Elect)<br />Mr. Abhishek (Elec)<br />Ms. Smitha R (Comp)<br />Mr. Vipin Sawant (Elec)</td>
          </tr>
          <br />
          <tr>
            <td>2.</td>
            <td>Publicity</td>
            <td>1. Website <br />2. Brochure <br />3. Publicity</td>
            <td>Dr. Aqleem (Mech)-Chair<br />Mr. Mritunjay (Comp)<br />Ms. Ruchi (Elec)<br />Mr. Bipin Alex (IT)</td>
          </tr>
          <br />
          <tr>
            <td>3.</td>
            <td>Registration & finance</td>
            <td>1. Regristration <br />2. Maintaining accounts</td>
            <td>Dr. Jyoti More(Comp)<br />Ms. Rupali D (IT)<br />Dr. Pravin Rahate<br />Mr.Pramod More( Comp)</td>
          </tr>
          <br />
          <tr>
            <td>4.</td>
            <td>Scrutiny</td>
            <td>1. Deciding policies and criteria for selection <br />2. Deciding the judges <br />3. Finalizing the awards winners</td>
            <td>Ms.Megha K (EXTC)<br />Mr. Prasad K (EXTC)<br />Dr.Sanjay R (Mech)<br />Dr. Amrita (HUM)<br />Mr. Prashant (EXTC)</td>
            {/* <td>Er. S.P. Singh<br />Er. Prabhakar Phulari<br />Er. Ashish S. Shrivastava<br />Dr. Ajay Sudhir Radke<br />Er. Arvind Jadhao</td> */}
          </tr>
          <br />
          <tr>
            <td>5.</td>
            <td>Venue and media</td>
            <td>1. Arranging venue <br />2. Media publicity of the event</td>
            <td>Ms.Archana ( IT) <br />Ms. Amruta P(EXTC)<br />Ms. Sharlene R(IT)<br />Mr.Kamlesh (Mech)<br />Mr. Sandeep (Mech)</td>
          </tr>
        </table>
      </div>
      <br />

      <br /><br /><br />
      <Footer />
    </div>
  )
}
