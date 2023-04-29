import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const academicExcellence = () => {
  return (
    <div>
      <Head>
        <title>Categories- IEI-NMLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />

      </Head>
      <Header /><NavBa />

      <Text fontSize="xl" color="black" marginStart={"350"}>
        < br />
        <Text fontSize="2xl" fontWeight="bold">
          Principal/Director <br />
        </Text><br />
        Entry Level criteria: <br /> <br /> 
        <Text>
        ●   Principal/ Director of Engineering colleges satisfying the norms of affiliation. <br />
        ●   Added advantage for Principal/Director of Institutes having at least five branches/ 300
            students
<br /><br />
        </Text>
      </Text>

      <Footer />
    </div>
  );
};

export default academicExcellence;