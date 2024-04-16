import Head from "next/head";
import Image from "next/image";
import {
  Center,
  Flex,
  Text,
  HStack,
  VStack,
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import VideoBackground from "../pages/components/VideoBackground";
import Header from "../pages/components/Header";
import Footer from "./components/Footer";
import HCarousel from "./components/HCarousel";
import VCarousel from "./components/VCarousel";
import NavBa from "./components/Navba";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Card from "./Card";

import { useState, useEffect } from "react";
// import PopupMessage from './components/PopupMessage';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
export default function Home() {
  // const [showPopup, setShowPopup] = useState(true);

  // useEffect(() => {
  //   if (showPopup) {
  //     // Prevent scrolling when the pop-up is shown
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [showPopup]);
  return (
    <div>
      <Box style={{ overflowY: "auto", height: "100vh" }}>
        {/* <Box>{showPopup && <PopupMessage />}</Box> */}
        <Head>
          <title>IEI-NMLC FCRIT</title>
          <meta name="title" content="IEI-BLC FCRIT" />
        </Head>
        <VideoBackground />
        <div>
          <Header />
          <NavBa />
        </div>
        <br />
        <Flex>
          <Flex color={"white"}> .</Flex>
          <Flex width={"100%"}>
            <Box width={"100%"} boxShadow="outline" p="6" rounded="md">
              <Text
                fontWeight="bold"
                bgColor={"telegram.300"}
                borderRadius={"0.15rem"}
                padding={"0.25rem"}
              >
                Latest Updates
              </Text>
              <marquee
                behavior="scroll"
                direction="left"
                style={{ width: "100%" }}
              >
                {/* <b style={{ fontSize: '17px' }}>Based on the request from participants we are extending the closing date by 31 July 2023. Hard copies will not be accepted. Sample Endorsement Letter : <a href="https://shorturl.at/loxJM" style={{ color: 'blue' }} target="_blank">https://shorturl.at/loxJM </a> The link for registering and uploading proposal: <a href="https://iei-ea.fcrit.ac.in/register" style={{ color: 'blue' }} target="_blank"><u>Check Here</u></a></b> */}
                <b style={{ fontSize: "17px" }}>
                  Registrations starting soon
                  {/* <a
                    href="https://shorturl.at/sGRU2"
                    style={{ color: "blue" }}
                    target="_blank"
                  >
                    https://shorturl.at/sGRU2
                  </a> */}
                </b>
              </marquee>
              {/* <b>  Results of IEI BLC - FCRIT excellence awards out !!! <a href="/ceremony/announcement" >Check Here</a> </b>
            <br />
            <br />
            <b>IEI-NMLC-FCRIT Excellence Awards-2022</b>
            <br />
            <b>Venue:</b>
            <br />
            <b>The Institution of Engineers (India) · Belapur Local Centre. Plot No 106, Sector 15, CBD Belapur,</b>
            <br />
            <b>Navi Mumbai, Maharashtra- 400614.</b>
            <br />
            <br />
            <b>Date and Time:</b>
            <br />
            <b>September 16th 2022, at 5:00 p.m.</b> */}
            </Box>
          </Flex>
        </Flex>

        <br />
        <br />
        <br />
        <Flex overflow={"hidden"} alignContent={"center"} marginRight={"full"}>
          <Carousel
            width={"100%"}
            showThumbs={false}
            autoPlay={true}
            interval={"5000"}
          >
            <div>
              <img src="/monument2.jpg" alt="image1" />
              <p className="legend">IEI-NMLC</p>
            </div>
            <div>
              <img className="carousel-img" src="/2.jpg" alt="image2" />
              <p className="legend">FCRIT, Vashi</p>
            </div>
          </Carousel>
        </Flex>
        <br />
        <br />
        <br />
        <SimpleGrid
          bgColor={"telegram.700"}
          paddingTop="20"
          paddingBottom="20"
          columns={2}
          spacingX="50px"
          spacingY="50px"
        >
          <Card
            aboutName={"About IEI-NMLC FCRIT Awards "}
            texts={
              "It is with great pleasure that Agnel Charities Fr. C. Rodrigues Institute of Technology (FCRIT) in collaboration with The Institute of Engineers, India Navi Mumbai Local Centre NMLC) is announcing the IEI NMLC FCRIT Excellence Awards 2023 . The objective of the award ceremony is to recognize and appreciate the excellence of academicians and Industry professionals in their respective domains. We are glad to inform that IEI NMLC FCRIT Excellence Awards organized in the years 2019, 2021 and 2022 received overwhelming responses and have been very successful."
            }
          />
          <Card
            aboutName={"About The Institution of Engineers (India) "}
            texts={
              "The Institution of Engineers (India) [IEI] is the largest multidisciplinary professional body of engineers, established in 1920 with its Headquarters located in Kolkata and incorporated under Royal Charter on 9th September,1935 by the then His Majesty of King George V. The Royal Charter endowed the Institution with the responsibility to promote the general advancement of engineering amongst its members and persons attached to the Institution. The Institution is protected under Article 372 of the Constitution of India                "
            }
          />
          <Card
            aboutName={"About IEI-NMLC Local Center"}
            texts={
              "The Council of IEI had set up Navi Mumbai Local Centre (NMLC), formerly called as Belapur Local Centre (BLC), in May 1994. Ever since its inception, NMLC is vibrant with active participation from its office bearers and ever-increasing members. NMLC is situated in a 1000 sq. meters plot in Sector 15, Central Business District (CBD), close to Belapur Railway Station in Navi Mumbai. NMLC Building was designed by the reputed architects, M/s. Shashi Prabhu & Associates and M/s. Sopan Parbhu Architect. It consists of stilt with 5 floors. At present, IEI-NMLC has 3687 members comprising of engineers from 15 Divisions."
            }
          />
          <Card
            aboutName={"About FCRIT "}
            texts={
              "FCRIT was established in 1994, named after late Rev. Fr. Conceicao Rodrigues. FCRIT persistently seeks and adopts innovative methods to improve the quality of education on a consistent basis. The global standards set at FCRIT in the field of teaching spurs the students in relentless pursuit of excellence. Though its reputation rests mainly on the high quality, value-based technical education that it imparts, it has to its credit a verdant, well-maintained campus and extensive facilities. Its location in the vicinity of the holy places of various religious denominations underscores its secular credentials and its philosophy of Vasudhaiva Kuttumbakam. The institute prides on being one of few that has accreditation for all five branches by National Board of Accreditation (NBA) and graded by NAAC. The Institute has also received the Best College Award in Urban Category from Mumbai University."
            }
          />
        </SimpleGrid>
        <br />

        <Footer />
      </Box>
    </div>
  );
}
