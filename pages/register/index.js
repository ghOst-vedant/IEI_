import Head from 'next/head'
import Image from 'next/image'
import { Box, Center, Heading } from "@chakra-ui/react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
import Details from './UserDetails';
// import nodemailer from 'nodemailer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Registration- IEI-NMLC FCRIT</title>
        <br />  <br />  <br />
        <meta name="title" content="IEI-BLC FCRIT" />
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet"></link>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
      </Head>
      <Header />
      <NavBa />
      <br /><br /><br />
      {/* <Box flexFlow="column" >
      <Center> */}
      <Heading>
        <Center>
          <b>Registration Closed</b>
        </Center>
        {/* <Details /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </Heading>
      {/* </Center>
      </Box> */}
      <Footer />

    </div>

  )
}
