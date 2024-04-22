import Head from "next/head";
import Image from "next/image";
import {
  Center,
  Text,
  SimpleGrid,
  Heading,
  HStack,
  Box,
} from "@chakra-ui/react";
import VideoBackground from "../components/VideoBackground";
import Header from "../components/Header";
import Card from "./Card";
import Footer from "../components/Footer";
import NavBa from "../components/Navba";
export default function Homie() {
  return (
    <div>
      <Head>
        <title>Committees- IEI-NMLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <VideoBackground />
      <Header />
      <NavBa />

      <br />
      <Center fontSize="5xl" fontWeight="bold" color="black">
        <pre fontWeight="bold">Advisory Committee</pre>
      </Center>

      <br />
      <br />
      <SimpleGrid
        paddingBottom="20"
        columns={2}
        spacingX="20px"
        spacingY="20px"
      >
        <Card
          personName={"Dr. Nilaj Deshmukh"}
          des4={"Chairman, IEI NMLC"}
          image="/photos/dr-nilaj-deshmukh.jpeg"
        />
        <Card
          personName={"Rev. Fr. Peter D'Souza"}
          des4={"Managing Director, Vashi."}
          image="/photos/peter.JPG"
        />
        <Card
          personName={"Cdr.Dr.B.Bhandarkar "}
          des4={"IEI Council Member"}
          image="/photos/mr_bhandarkar.jpeg"
        />
        <Card
          personName={"Dr. S M  Khot"}
          des4={"Principal, FCRIT Vashi"}
          image="/photos/sm-khot.jpeg"
        />
        <Card
          personName={"Er. Prabhakar Phulari"}
          des4={"Hon. Secretary IEI MSC"}
          image="/photos/phulari.jpeg"
        />
        <Card
          personName={"Dr. Milind Shah"}
          des4={"Dean (Academics) and Head "}
          des5={"(EXTC),FCRIT, Vashi"}
          image="/photos/milind-shah.jpeg"
        />
        <Card
          personName={"Dr. Kishanrao M. Godbole"}
          des4={"Imm. Past Chairman, IEI NMLC."}
          // image="/photos/milind-shah.jpeg"
        />
        <Card
          personName={"Dr. Lata Ragha"}
          des4={"Dean (P.G. Studies) and Head "}
          des5={"(Comp),FCRIT, Vashi"}
          image="/photos/lata.jpeg"
        />
        <Card
          personName={"Dr. M.B. Dagaonkar"}
          des4={"Past Council Member, IEI "}
          des5={"Past Chairman IEI MSC "}
          image="/photos/mohan.jpg"
        />
        <Card
          personName={"Dr. Sushil Thale"}
          des4={"Dean (R&D and Industry Liasoning), FCRIT,Vashi "}
          image="/photos/Thale.png"
        />
        <Card
          personName={"Er. K. K.Verkhedkar"}
          des4={"Imm. Past Chairman, IEI NMLC."}
          image="/photos/KK-varkhedkar.jpeg"
        />
        <Card
          personName={"Dr. M. Kiruthika"}
          des4={"Head (Computer Engg), FCRIT, Vashi"}
          image="/photos/kiruthika.jpeg"
        />
        <Card
          personName={"Er. Vijay C. Kamble  "}
          des4={"Hon. Secretary IEI MSC"}
          image="/photos/kamble.jpeg"
        />
        <Card
          personName={"Dr. Aqleem Siddiqui"}
          des4={"Head(Mechanical Engg), FCRIT,Vashi"}
          image="/photos/aqleem.png"
        />
        <Card
          personName={"Er. Jaswant N.Mistry"}
          des4={"Past Chairman, IEI NMLC"}
          // image="/photos/KK-varkhedkar.jpeg"
        />
        <Card
          personName={"Dr. Bindu S"}
          des4={"Dean (Student Affairs) and Head (Elec),FCRIT, Vashi"}
          image="/photos/Bindu.jpeg"
        />

        <Card
          personName={"Er. Sanjay R. Bagul "}
          des4={"Hon. Secretary, IEI NMLC  "}
          image="/photos/sanjay.jpeg"
        />
        <Card
          personName={"Dr. Shubhangi Vaikole"}
          des4={"Head (IT)"}
          des5={"FCRIT, Vashi"}
          image="/photos/vaikhole.jpeg"
        />
      </SimpleGrid>

      <br />

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
