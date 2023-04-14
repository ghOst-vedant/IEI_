import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text, HStack, Box, Heading } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';

const generalInstructions = () => {
    function downloadPDF(pdf) {
        const linkSource = `data:application/pdf;base64,${pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = "vct_illustration.pdf";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    return (
        <div>
            <Head>
                <title>Categories- IEI-NMLC FCRIT</title>
                <meta name="title" content="IEI-BLC FCRIT" />

            </Head>
            <Header /><NavBa />

            <Text color="black" >
                <Center fontWeight="bold" color="black" fontSize="2xl">
                    Information Required from the Nominees <br /></Center>
                <br />
                <Center fontWeight="bold" color="black" fontSize="2xl">
                    General Instructions <br /></Center>

                <br />
            </Text>
            <div>
            <Image
        src="/inst1.jpeg"
        alt="inst1"
        width={1000}
        height={1000}
      />
      </div>
      <br />
      <br />
      <div>
        <Center>
      <Image
      src="/inst2.jpeg"
      alt="inst2"
      width={1000}
      height={1000}
    />
    </Center>
    </div>
    <br />
      <br />
      <div>
        <Center>
    <Image
        src="/inst3.jpeg"
        alt="inst3"
        width={1000}
        height={1000}
      />
      </Center>
      </div>
      <br />
      <br />
      <div>
        <Center>
      <Image
        src="/inst4.jpeg"
        alt="inst4"
        width={900}
        height={1000}

      />
      </Center>
      </div>
            <Text>
            <Center fontWeight="bold" color="black" fontSize="2xl">
                <a href="/Bonafide format.pdf" download>Click to download Bonafide format</a>

            </Center>
            </Text>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default generalInstructions;