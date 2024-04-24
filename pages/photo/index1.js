import Head from "next/head";
import Image from "next/image";
import {
  Center,
  HStack,
  Box,
  Divider,
  Heading,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "./Card";
import NavBa from "../components/Navba";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Past Awardees- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <Header />
      <NavBa />
      <Center fontSize="6xl" fontWeight="bold" color="white">
        Past Awardees
      </Center>

      <Center>
        <Heading fontSize="50" fontFamily="fantasy">
          Past Awardees
        </Heading>
      </Center>

      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading>IEI 2023 Awardees</Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <Center>
        <Carousel
          width={"1150px"}
          showThumbs={false}
          autoPlay={true}
          interval={"5000"}
        >
          <div>
            <img src="/photos/2023_awardees/ppt1.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt2.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt3.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt4.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt6.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt7.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt9.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt10.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt11.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt12.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt13.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt14.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt15.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt16.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt18.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt19.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt20.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt22.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt23.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt24.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt25.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt26.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt28.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt29.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt30.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt32.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt33.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt34.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt35.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt36.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt37.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt38.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt39.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt40.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt41.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt42.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt43.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt44.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt45.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt46.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt47.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt48.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt49.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt50.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt51.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt52.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt53.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt54.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt55.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt56.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt57.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt58.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt59.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt60.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt61.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt62.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt63.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt64.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt65.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt66.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt67.png" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt68.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt69.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt70.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt71.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt72.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt73.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt74.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt75.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt76.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt77.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt78.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt79.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023_awardees/ppt80.jpg" alt="image4" />
          </div>
        </Carousel>
      </Center>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading>IEI 2022 Awardees</Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <Center>
        <Carousel
          width={"1150px"}
          showThumbs={false}
          autoPlay={true}
          interval={"5000"}
        >
          <div>
            <img src="/photos/awards2022-1.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-2.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-3.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-4.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-5.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-6.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-7.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-8.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-9.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-10.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-11.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-12.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-13.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-14.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-15.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-16.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-17.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-18.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-19.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-20.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-21.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-22.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-23.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-24.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-25.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-26.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-27.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-28.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-29.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-30.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-31.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-32.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-33.jpg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2022-34.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-35.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-36.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-37.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-38.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-39.jpg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards2022-40.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-41.jpg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards2022-42.jpg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards2022-43.jpg" alt="image4" />
          </div>
        </Carousel>
      </Center>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading>IEI 2021 Awardees</Heading>
        </Center>
        <Box backgroundColor="black" h="3px" marginRight="5%" w="30%" />
      </HStack>
      <br />
      <br />
      <Center>
        <Carousel
          width={"1150px"}
          showThumbs={false}
          autoPlay={true}
          interval={"5000"}
        >
          <div>
            <img src="/photos/awards9.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards10.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards11.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards12.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards13.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards14.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards15.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards16.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards17.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards18.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards19.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards20.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards21.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards22.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards23.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards24.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards25.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards26.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards27.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards28.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards29.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards30.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards31.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards32.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards33.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards34.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards35.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards36.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards37.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards38.jpeg" alt="image4" />
          </div>
        </Carousel>
      </Center>

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
}
