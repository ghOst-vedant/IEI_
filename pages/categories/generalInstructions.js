import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Center, Text, HStack, Box, Heading } from "@chakra-ui/react";
import VideoBackground from "../components/VideoBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import NavBa from "../components/Navba";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

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
      <Header />
      <NavBa />
      <Text color="black">
        <Center fontWeight="bold" color="black" fontSize="2xl">
          Information Required from the Nominees <br />
        </Center>
        <br />
        <Center fontWeight="bold" color="black" fontSize="2xl">
          General Instructions <br />
        </Center>

        <br />
      </Text>
      <Text>
        <Center fontWeight="bold" color="black" fontSize="2xl">
          IEI NMLC-FCRIT Research and Academic Excellence Awards 2024 <br />
        </Center>
        <br />
        <Center
          fontWeight="bold"
          color="black"
          fontSize="xl"
          marginRight="600px"
        >
          I. Essential documents to be uploaded by all candidates across all
          categories <br />
        </Center>
      </Text>
      <Text>
        <Center color="black" fontSize="xl" marginRight="330px">
          <ol>
            <li> Identity proof (Aadhar card preferably)</li>
            <li> Proof of affiliation (Institute ID card)</li>
            <li> Passport size recent photograph not exceeding 10 MB</li>
            <li>
              {" "}
              Uploading the screenshot of registration amount payment is
              mandatory
            </li>
            <li> Proposal Document</li>

            <li>
              {" "}
              Click here to view past proposals :{" "}
              <a
                href="https://fcrit-my.sharepoint.com/:b:/g/personal/1021265_comp_fcrit_ac_in/EWyHBI8dafFAtsQgRgq3oAUBC46qBL2iBWX9LZkt9saOew?e=AuhKQG"
                style={{ color: "blue" }}
                target="_blank"
              >
                <u>Past Proposals</u>{" "}
              </a>
            </li>

            <li> IF IEI MEMBER, MEMBERSHIP ID DOCUMENT NEED TO BE UPLOADED</li>
            <li>
              Endorsement Letter in the prescribed format{" "}
              <a
                href="https://shorturl.at/loxJM"
                style={{ color: "blue" }}
                target="_blank"
              >
                https://shorturl.at/loxJM{" "}
              </a>{" "}
            </li>
          </ol>
        </Center>
      </Text>
      <br /> <br />
      <Text>
        <Center
          fontWeight="bold"
          color="black"
          fontSize="xl"
          marginRight="1100px"
        >
          II. General Instructions <br />
        </Center>
      </Text>
      <Text>
        <Center color="black" fontSize="xl" marginLeft="270px">
          <ol>
            <li>
              Registrations for applying are open from 29th April, 2024. Please
              register through the website http://iei-ea.fcrit.ac.in/.{" "}
            </li>
            <li>
              Accommodation (at the time of Award function) can be made
              available to outstation participants on nominal charges, in a
              limited way on first-come-firstserve basis.
            </li>
            <li>
              The Fees for processing the applications has to be paid at the
              time of registration. The amount is as per different categories
              are given here.
            </li>
            Acronyms:
            <br />
            <b>
              RE: Research Excellence
              <br />
            </b>
            <b>
              AE: Academic Excellence
              <br />
            </b>
            <b>
              HoD: Head of Department
              <br />
            </b>
            <b>
              UG: Undergraduate
              <br />
            </b>
            <b>
              PG: Post graduate
              <br />
            </b>
            <b>
              R: Regional
              <br />
            </b>
            <b>
              N: National
              <br />
            </b>
          </ol>
        </Center>
        <br />
        <br />
      </Text>
      <Center>
        <TableContainer>
          <Table
            variant="simple"
            size="sm"
            width={"800px"}
            height={"150px"}
            style={{ border: "2px solid black" }}
          >
            <Thead>
              <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Text fontSize="2xl" fontWeight="bold" color="black">
                  Sr. No. <br />
                </Text>
              </Td>
              <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Text fontSize="2xl" fontWeight="bold" color="black">
                  Award Category/ Sub- Category <br />
                </Text>
              </Td>
              <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Text fontSize="2xl" fontWeight="bold" color="black">
                  Fees with GST (INR)Non IEI members <br />
                </Text>
              </Td>

              <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Text fontSize="2xl" fontWeight="bold" color="black">
                  Fees with GST (INR)IEI members <br />
                </Text>
              </Td>
            </Thead>

            <Tbody>
              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    1 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    RE (Student) UG (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    600/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    2 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    RE (Student) PG (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    600/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    3 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    RE (Student) PhD (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    600/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    4 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    RE (Teaching faculty) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    1700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    1500/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    5 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    RE (Industry/ Govt. Organization/Consultancy Firm)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    1700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    1500/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    6 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    AE (Student) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    600/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    7 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    AE (Polytechnic Student)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    600/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    8 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    AE (Teaching Faculty) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    1700/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    1500/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    9 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    AE (HoD) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    2200/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    2000/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    10 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    AE (Principal/Director) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    3200/-
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    3000/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    11 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    AE (Institute) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  colSpan="2"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    5500/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    12 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    Startup Excellence <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  colSpan="2"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    3500/-
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" fontWeight="bold" color="black">
                    13 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    Industry Excellence
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  fontWeight="bold"
                  color="black"
                  colSpan="2"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" fontWeight="bold" color="black">
                    5500/-
                    <br />
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br /> <br />
      <Text>
        <Center color="black" fontSize="xl" marginLeft="150px">
          <b>
            Based on the request from participants we are extending the closing
            date by 1 July 2024. Hard copies will not be accepted. Sample
            Endorsement Letter :{" "}
            <a
              href="https://shorturl.at/loxJM"
              style={{ color: "blue" }}
              target="_blank"
            >
              https://shorturl.at/loxJM{" "}
            </a>{" "}
            The website link for uploading proposal: http://iei-ea.fcrit.ac.in/.
          </b>
          <br />
        </Center>
        <br />
      </Text>
      <Text>
        <Center color="black" fontSize="xl" marginLeft="270px">
          <ol start={4}>
            <b>
              {" "}
              <li>
                National Category includes all Central Government Funded
                Institutes (IIT’s,NIT’s etc.).{" "}
              </li>
            </b>
            <b>
              <li>
                Regional Category includes all Engineering Institutes affiliated
                to State Universities and Private Universities approved by State
                Governments.
              </li>
            </b>
            <b>
              <li>
                Kindly mention the category code in your proposal at appropriate
                place. Proposals not having correct category name will be
                rejected.
              </li>
            </b>
            <li>
              Please ensure and preserve the receipt of candidature and proposal
              number allotted to you for future communication.
            </li>
            <li>
              Contact number for any queries:{" "}
              <b>
                022-27771000- Extn: 364 or 421 (Office Hours: 10.00 am to 4.30
                pm)
              </b>
            </li>
            <li>email id: ieifcritawards@fcrit.ac.in</li>
            <li>
              Scrutiny of applications will be in two stages:<br></br>
              - First Stage: Registration and document submission <br />- Second
              Stage: Resolving issues/concerns raised by the Jury
            </li>
          </ol>
        </Center>
        <br />
        <br />
      </Text>
      <Text>
        <Center
          fontWeight="bold"
          color="black"
          fontSize="xl"
          marginRight="1000px"
        >
          III. Who can apply? <br />
        </Center>
      </Text>
      <Text>
        <Center color="black" fontSize="xl" marginLeft="270px">
          <ol>
            <li>
              Teaching faculty with adhoc/temporary/non-regular/on contract
              appointment is eligible to apply if the nominee is working with
              currently affiliated Institute for at least three years. Templates
              need to be uploaded for different categories.
            </li>
            <li>
              Candidates who are Indian citizens, fulfill the entry level
              criteria mentioned for each category,and candidates who satisfy
              the norm of current affiliation.{" "}
            </li>
            <li>
              One candidate can apply <b>in maximum two categories. </b>
            </li>
            <li>
              Candidate should possess a degree in Engineering or should be a
              student/researcher pursuing degree from Engineering
              Institute/Polytechnic.{" "}
            </li>
            <li>
              Entry level criteria for each category are given in the TABLE A
            </li>
          </ol>
        </Center>
        <br />
        <br />
      </Text>
      <Text>
        <Center
          fontWeight="bold"
          color="black"
          fontSize="xl"
          marginRight="950px"
        >
          IV. Who should not apply? <br />
        </Center>
      </Text>
      <Text>
        <Center color="black" fontSize="xl" marginLeft="-20px">
          <ol>
            <li>
              Individuals or teams who have received any award from IEI or FCRIT
              in the same category as current, in the year 2023.{" "}
            </li>
            <li>Retired Person </li>
            <li>Independent researchers</li>
            <li>
              Members of Scrutiny committee of IEI-NMLC FCRIT Excellence Awards
              2024.
            </li>
          </ol>
        </Center>
        <br />
        <br />
      </Text>
      <Text>
        <Center
          fontWeight="bold"
          color="black"
          fontSize="xl"
          marginRight="670px"
        >
          V. Entry Level Criteria (apart from those mentioned in III) <br />
        </Center>
        <br />
        <br />
      </Text>
      <Text>
        <Center fontWeight="bold" color="black" fontSize="xl">
          TABLE A <br />
        </Center>
        <br />
        <br />
      </Text>
      <Center>
        <TableContainer width="1500px" height="1200px">
          <Table
            variant="simple"
            size="xs"
            width="700px"
            height="900px"
            marginLeft="30px"
            style={{ border: "2px solid black" }}
          >
            <Thead>
              <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Text fontSize="xl" fontWeight="bold" color="black">
                  Sr. No. <br />
                </Text>
              </Td>
              <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Text fontSize="xl" fontWeight="bold" color="black">
                  Award Category/ Sub- Category <br />
                </Text>
              </Td>
              <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Text fontSize="xl" fontWeight="bold" color="black">
                  Entry Level Criteria <br />
                </Text>
              </Td>
            </Thead>

            <Tbody>
              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    1 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    RE (Student) UG (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • should be a student of TE or BE in January 2024.
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    2 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    RE (Student) PG (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • should be a student of second year ME in January 2024.
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    3 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    RE (Student) PhD (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • PhD completed in Jan 2023 and not earlier.
                    {/* <br /> */}
                  </Text>
                  <Text fontSize="l" color="black">
                    • Registered scholars preferably on the verge of completion,
                    exceptional PhD work in earlier stage is also welcome.
                  </Text>
                </Td>
              </Tr>

              {/*  */}

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    5 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    RE (Teaching faculty)(R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Faculty should be Doctorate in his/her discipline.
                    <br />
                    • The research carried out must be at the affiliated
                    Institute and should not be the candidate’s own PhD
                    research.
                    <br />
                    <b>
                      • This award is NOT for particular research but for the
                      overall research contributions of the faculty
                    </b>
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    6 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    RE (Industry/ Govt. Organization/Consultancy Firm)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • The research should be conducted at the Organization
                    currently affiliated with.
                    <br />
                    <b>
                      • Note that the award is for particular research and not
                      researcher’s career.
                    </b>
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    7 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    AE (Student) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Only UG students. Student should be a BE student in
                    January 2024 or a student passed out by August 2022.
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    8 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    AE (Polytechnic Student)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Student should be in final year of diploma Engineering
                    discpline in Jan 2024.
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    9 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    AE (Teaching Faculty) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Candidate should have minimum 5 years of teaching
                    experience excluding probation.
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    10 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    AE (HoD) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Candidate should be Professor/ Associate Professor.
                    <br />
                    • Should be serving as HoD at least for two years at the
                    time of applying.
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    11 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    AE (Principal/Director) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Principal/ Director of Engineering colleges satisfying the
                    norms of affiliation.
                    <br />
                    • Added advantage for Principal/Director of Institutes
                    having at least five branches/ 300 students
                    <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    12 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    AE (Institute) (R & N)
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • The nomination can be filed by Dean Academics or Principal
                    of the Institute fulfilling affiliation norms.
                    <br />
                    • The Institute should have at least three graduated
                    batches. <br />
                    • Added advantage if the Institute has at least five
                    branches with minimum 300 students on roll. <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    13 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    Startup Excellence <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Startup should be MSME registered. <br />
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Text fontSize="l" color="black">
                    14 <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    Industry Excellence
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="l"
                  color="black"
                  style={{ border: "1px solid black" }}
                >
                  <Text fontSize="l" color="black">
                    • Any tie-up with any academic Institute in the form of
                    academic guidance, project guidance, industry visit, or
                    sponsorship
                    <br />
                    • Laboratory development at any academic Institute
                    <br />
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <br />
      </Center>
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
                mails have been sent from the email address{" "}
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
      <Text>
        <Footer />
      </Text>
    </div>
  );
};

export default generalInstructions;
