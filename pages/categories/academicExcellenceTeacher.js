import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const academicExcellence  = () => {
    return (
        <div>
            <Head>
                <title>Categories- IEI-NMLC FCRIT</title>
                <meta name="title" content="IEI-BLC FCRIT" />

            </Head>
            <Header /><NavBa />
            
            <Text fontSize="3xl" fontWeight="bold" color="black" marginStart={"300"}>
                Research Excellence (National/Regional)
            </Text>
           
            <br />
            <br />
            <Text fontSize="xl" color="black" marginStart={"350"}>
                <Text fontSize="2xl" fontWeight="bold">
                    Teaching Faculty<br />
                </Text>
                <br />
                Entry Level Criteria:<br /> <br />
                <Text>
                ●    Candidate should have minimum 5 years of teaching experience excluding probation.

                <br />
                </Text>
                <br/>
               </Text>
            <br />
            <br />
            <br />


            <Footer />
        </div>
    );
};

export default academicExcellence ;