import Head from "next/head";
import Image from "next/image";
import { Center, Text, SimpleGrid } from "@chakra-ui/react";
import VideoBackground from "../components/VideoBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "./Card";
import NavBa from "../components/Navba";
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
      <SimpleGrid
        paddingBottom="20"
        columns={3}
        spacingX="20px"
        spacingY="20px"
      >
        <Card
          des1={"Chair,"}
          des2={"IEI NMLC FCRIT Excellence "}
          des3={"Award"}
          des4={"HOD (EXTC),"}
          // des5={"Member,(IEI NMLC)"}
          // des6={"Dean (Faculty) and Head "}
          des5={"(Mech),FCRIT, Vashi"}
          personName={"Dr. Megha Kolhekar"}
          image="/photos/megha.png"
        />
        <Card
          des1={"Co-Chair,"}
          des2={"IEI NMLC FCRIT Excellence "}
          des3={"Award"}
          personName={"Dr. Jyoti More"}
          des4={"Associate Professor, Comp. "}
          des5={"Engg. Dept.,"}
          des6={"FCRIT, Vashi"}
          image="/photos/jyoti.png"
        />
        <Card
          des1={"Co-Chair,"}
          des2={"IEI NMLC FCRIT Excellence "}
          des3={"Award"}
          personName={"Er. S. P. Singh"}
          des4={"HOD-Marketing and BD,  "}
          des5={"Certification Engineers"}
          des6={" International Ltd"}
          image=""
        />
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
            <td>
              {" "}
              Ms. Amruta P.
              <br />
              Ms. Sharlene R.
              <br />
              Mr. Kamlesh S.
              <br />
              Mr. Sandeep A.
            </td>
          </tr>
          <br />
          <tr>
            <td>2.</td>
            <td>Publicity</td>
            <td>Dr. Dhananjay P.</td>
            <td>
              Dr. Bharat S. <br />
              Mr. Mritunjay O. <br />
              Ms. Ruchi H.
              <br />
              Mr. Binoy A.{" "}
            </td>
          </tr>
          <br />
          <tr>
            <td>3.</td>
            <td>Registration & finance</td>
            <td>Dr. Rupali D</td>
            <td>
              Dr. Pravin R.
              <br />
              Mr. Chaitanya M.
              <br />
              Mr. Pramod More
            </td>
          </tr>
          <br />
          <tr>
            <td>4.</td>
            <td>Certificate and Trophy</td>
            <td>Dr. Bindu R. </td>
            <td>
              Mr. Abhishek S.
              <br />
              Ms. Smitha R. <br />
              Mr. Vipin Sawant
            </td>
          </tr>
          <br />

          <tr>
            <td>5.</td>
            <td>Scrutiny</td>
            <td>Dr. Prasad K.</td>
            <td>
              Dr. Sanjay R. <br />
              Dr. Amrita B.
              <br />
              Ms. Sreedevi N.
              <br />
              Mr. Prashant M.
            </td>
          </tr>
          <br />
        </table>
      </div>
      <br />

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
