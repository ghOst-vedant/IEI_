import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavBa from '../components/Navba';
const researchExcellence = () => {
    return (
        <div><Head>
            <title>Categories- IEI-NMLC FCRIT</title>
            <meta name="title" content="IEI-BLC FCRIT" />

        </Head>
            <Header /><NavBa />

            <Text fontSize="xl" color="black" marginStart={""}>
                <Text fontSize="2xl" fontWeight="bold" color="black" marginStart={"350"}>
                    Teaching Faculty <br /><br />
                </Text>
                <Text fontWeight="normal" color="black" marginStart={"350"}>
                    Entry Level Criteria:<br /> <br />
                    ●  Faculty should be Doctorate in his/her discipline <br />
                    ●  The research carried out must be at the affiliated Institute and should not be the PhD research <br />
                    <b>
                    ●  This award is NOT for the overall career research but is for particular research that has been recently completed or on the verge of completion. <br />
                    (Please provide data for last three years)</b><br /> <br /></Text>
                </Text>
            <br /><br />
            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default researchExcellence;