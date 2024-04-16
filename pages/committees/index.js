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
        <title>Committees- IEI-NMLC FCRIT</title>
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
        <Card des1={"Chair,"} des2={"IEI NMLC FCRIT Excellence "} des3={"Award"} des4={"Managing Committee  "} des5={"Member,(IEI NMLC)"} des6={"Dean (Faculty) and Head "} des7={"(Mech),FCRIT, Vashi"} personName={"Dr. Nilaj Deshmukh"} image="/photos/dr-nilaj-deshmukh.jpeg" />
        <Card des1={"Co-Chair,"} des2={"IEI NMLC FCRIT Excellence "} des3={"Award"} personName={"Dr. M. Kiruthika"} des4={"Associate Professor, Comp.  "} des5={"Engg. Dept.,"} des6={"FCRIT, Vashi"} image="/photos/km.jpg" />
      </SimpleGrid>
      <br />
      <br />
      <div className="App">
        <table>
          <tr>
            <th>Sr.No</th>
            <th>Committee</th>
            <th>Chair</th>
            <th>Members</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Venue and media</td>
            <td>Mrs. Archana S.</td>
            <td> Ms. Amruta P.<br />Ms. Sharlene R.<br />Mr. Kamlesh S.<br />Mr. Sandeep A.</td>
          </tr>
          <br />
          <tr>
            <td>2.</td>
            <td>Publicity</td>
            <td>Dr. Aqleem S.</td>
            <td>Mr. Mritunjay <br />Ms. Ruchi H.<br />Mr. Binoy Alex </td>
          </tr>
          <br/>
          <tr>
            <td>3.</td>
            <td>Registration & finance</td>
            <td>Dr. Jyoti More</td>
            <td>Ms. Rupali D. <br />Dr. Pravin Rahate<br />Mr. Pramod More</td>
          </tr>
          <br />
          <tr>
            <td>4.</td>
            <td>Certificate and Trophy</td>
            <td>Dr. Bindu R. </td>
            <td>Mr. Abhishek S.<br />Ms. Smitha R. <br />Mr. Vipin Sawant</td>
          </tr>
          <br />
          
          <tr>
            <td>5.</td>
            <td>Scrutiny</td>
            <td>Dr. Megha K.</td>
            <td>Dr. Prasad K. <br />Dr. Sanjay R. <br />Dr. Amrutha B.<br />Mr. Prashant M.</td>
          </tr>
          <br />
         
        </table>
      </div>
      <br />

      <br /><br /><br />
      <Footer />
    </div>
  )
}
