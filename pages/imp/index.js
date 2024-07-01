import Head from "next/head";
import Image from "next/image";
import { Center, Text } from "@chakra-ui/react";
import VideoBackground from "../components/VideoBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBa from "../components/Navba";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Important Dates</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <VideoBackground />
      <Header />
      <NavBa />
      <Center fontSize="6xl" fontWeight="bold" color="black">
        Important Dates
      </Center>
      <br />
      <Center fontSize={"2xl"} fontWeight="bold">
        Registration Opening Date: 29th April 2024
      </Center>
      <br />
      <Center fontSize={"2xl"} fontWeight="bold">
        Registration Closing Date: 20th July 2024
      </Center>
      <br />
      <Center fontSize={"2xl"} fontWeight="bold">
        Award Ceremony Date : 18th September 2024
      </Center>
      <br />
      {/* <Center fontSize={"2xl"}fontWeight="bold">Communication to the Awardees: 5th September 2022</Center><br/> */}
      {/* <Center fontSize={"2xl"}fontWeight="bold">Award Ceremony: 16th September 2022</Center><br/>
      <br/><br/><br/> */}
      <br />
      <br />
      <Text style={{ marginBottom: "100px" }}>
        <p
          style={{
            color: "black",
            margin: "10px 30px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <b>NOTE: </b>{" "}
        </p>
        <ul>
          <li>
            <Text
              style={{
                color: "red",
                margin: "10px 30px",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              A decision to disqualify an application will be made by the IEI
              NMLC-FCRIT Excellence Awards committee at their sole discretion.
            </Text>
          </li>
          <li>
            <Text
              style={{
                color: "red",
                margin: "10px 30px",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              <b>
                Dear Applicants, It is crucial to note that acknowledgement
                mails have been sent from the email address
                <a
                  href="mailto:supportiei@fcrit.ac.in"
                  style={{ padding: " 0 5px", color: "blue" }}
                >
                  supportiei@fcrit.ac.in
                </a>
                If you have not received an acknowledgement, please make sure to
                contact us immediately at the aforementioned email address.
              </b>
            </Text>
          </li>
        </ul>
      </Text>
      <Footer />
    </div>
  );
}
