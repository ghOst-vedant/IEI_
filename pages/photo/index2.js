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
        <title>Past Award Ceremonies- IEI-BLC FCRIT</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <Header />
      <NavBa />
      <Center fontSize="6xl" fontWeight="bold" color="white">
        Past Award Ceremonies
      </Center>

      <Center>
        <Heading fontSize="50" fontFamily="fantasy">
          Past Award Ceremonies
        </Heading>
      </Center>

      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading>2023 award ceremony</Heading>
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
            <img src="/photos/2023/lantern.JPG" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023/award1.JPG" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023/award2.JPG" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023/award3.JPG" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023/award5.JPG" alt="image1" />
          </div>
          <div>
            <img src="/photos/2023/award6.JPG" alt="image2" />
          </div>
          <div>
            <img src="/photos/2023/award7.JPG" alt="image3" />
          </div>
          <div>
            <img src="/photos/2023/award8.JPG" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023/award9.JPG" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023/award10.JPG" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023/award11.JPG" alt="image4" />
          </div>
          <div>
            <img src="/photos/2023/award12.JPG" alt="image4" />
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
          <Heading>2022 award ceremony</Heading>
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
            <img src="/photos/awards44.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards45.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards46.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards47.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards48.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards49.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards50.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards51.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards52.jpeg" alt="image4" />
          </div>
        </Carousel>
      </Center>
      <br />
      <br />
      <br />
      <br />
      <HStack>
        <Box backgroundColor="black" h="3px" marginLeft="5%" w="30%" />
        <Center>
          <Heading>2019 award ceremony</Heading>
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
            <img src="/photos/awards1.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards2.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards3.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards4.jpeg" alt="image4" />
          </div>
          <div>
            <img src="/photos/awards5.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/photos/awards6.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/photos/awards7.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/photos/awards8.jpeg" alt="image4" />
          </div>
        </Carousel>
      </Center>
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
