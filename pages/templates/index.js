import Head from "next/head";

import {
  Center,
  Link,
  Table,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import VideoBackground from "../components/VideoBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBa from "../components/Navba";
import NextLink from "next/link";
export default function Home() {
  const handlepop = () => {
    alert("Will be available soon.");
  };
  return (
    <div>
      <Head>
        <title>Proposal templates</title>
        <meta name="title" content="IEI-BLC FCRIT" />
      </Head>
      <VideoBackground />
      <Header />
      <NavBa />
      <Center fontSize="5xl" fontWeight="bold" color="black">
        Proposal Templates
      </Center>
      <br />
      <br />
      <Center>
        <TableContainer>
          <Table
            variant="simple"
            size="sm"
            width={"800px"}
            height={"150px"}
            style={{ border: "2px solid black" }}
          >
            <Tbody>
              <Tr>
                <Td
                  style={{ textAlign: "center", border: "1px solid black" }}
                  colSpan={2}
                >
                  {/* <NextLink href="/awardees.pdf" passHref>
                    <Link> */}
                  <Text fontSize="2xl" fontWeight="bold" color="black">
                    Research Excellence <br />
                  </Text>
                  {/* </Link>
                  </NextLink> */}
                </Td>
                <Td
                  Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                  colSpan={2}
                >
                  <Text fontSize="2xl" fontWeight="bold" color="black">
                    Academic Excellance
                    <br />
                  </Text>
                </Td>
                <Td
                  Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="black"
                  style={{ textAlign: "center", border: "1px solid black" }}
                  colSpan={2}
                >
                  <Text fontSize="2xl" fontWeight="bold" color="black">
                    Startup and Industry Excellance
                    <br />
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/REAE/RE_students PG_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Students
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/Research Excellence (Teaching Faculty).doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Teaching
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/REAE/AE_students PG_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Students
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/Academic Excellence (Teaching Faculty).doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Teaching
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td
                  style={{ textAlign: "center", border: "1px solid black" }}
                  onClick={handlepop}
                >
                  {/* <NextLink
                    href="/templates/REAE/AE_students UG_26.4.24.doc"
                    passHref
                  > */}
                  <Link>
                    <Text fontSize="2xl" fontWeight="bold" color="black">
                      Startup
                      <br />
                    </Text>
                  </Link>
                  {/* </NextLink> */}
                </Td>
              </Tr>
              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/REAE/RE_students PhD_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        PhD
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  {/* <NextLink
                    href="/templates/REAE/RE_students PhD_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Faculty
                        <br />
                      </Text>
                    </Link>
                  </NextLink> */}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/REAE/AE_students PhD_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        PhD
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/Academic Excellence (HOD)26-4.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        HOD
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td
                  style={{ textAlign: "center", border: "1px solid black" }}
                  onClick={handlepop}
                >
                  {/* <NextLink
                    href="/templates/REAE/AE_students PhD_26.4.24.doc"
                    passHref
                  > */}
                  <Link>
                    <Text fontSize="2xl" fontWeight="bold" color="black">
                      Industry Excellance
                      <br />
                    </Text>
                  </Link>
                  {/* </NextLink> */}
                </Td>
              </Tr>
              <Tr>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/REAE/RE_students UG_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        UG
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  {/* <NextLink
                    href="/templates/REAE/RE_students PG_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        RE_students PG
                        <br />
                      </Text>
                    </Link>
                  </NextLink> */}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/REAE/AE_students UG_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        UG
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/Academic Excellence Principal 26-4.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Principal
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
              </Tr>
              <Tr>
                <Td
                  style={{ textAlign: "center", border: "1px solid black" }}
                ></Td>
                <Td
                  style={{ textAlign: "center", border: "1px solid black" }}
                ></Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/REAE/AE_students Diploma_26.4.24.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Diploma
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <NextLink
                    href="/templates/Academic Excellence Institute 26-4.doc"
                    passHref
                  >
                    <Link>
                      <Text fontSize="2xl" fontWeight="bold" color="black">
                        Institute
                        <br />
                      </Text>
                    </Link>
                  </NextLink>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <br />

      <Footer />
    </div>
  );
}
