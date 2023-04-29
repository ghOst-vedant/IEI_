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
                <br />
                <Text fontSize="2xl" fontWeight="bold" color="black" >
                    Institute <br />
                </Text><br />
                <Text color="black" fontWeight="normal">
                    Entry level criteria<br /> <br />
                    ●   The nomination can be filed by Dean Academics or Principal of the AICTE affiliated Institute. <br />
                    ●   The Institute should have at least three graduated batches. <br />
                    Added advantage if the Institute has at least five branches with minimum 300 students on roll<br />
                 </Text>
                <br /><br />

            </Text>
            
            <Footer />
        </div>
    );
};

export default academicExcellence;