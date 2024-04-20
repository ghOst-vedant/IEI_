import React from "react";
import Head from "next/head";
import { Center, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBa from "../components/Navba";
import Image from "next/image";
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
  return (
    <div>
      <Header />
      <NavBa />
      <Text color="black">
        <Center fontWeight="bold" color="black" fontSize="2xl">
          Registration Details <br />
        </Center>
        <br />
        <Center fontWeight="bold" color="black" fontSize="2xl">
          Registration fees ( all-inclusive of GST): <br />
        </Center>
        <br />
      </Text>
      {/* <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
      Research Excellence category:   <br/></Text>
      <br/>
      <Text marginStart={"300"}color="black">
      	a)	Students: Rs 700/-<br/>
      	b)	Teaching Faculty and Researcher from Industry - Rs 1500 /- <br/>
      </Text>
      <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
      Academic Excellence category:   <br/></Text>
      <br/>
      <Text marginStart={"300"}color="black">
      	a)	Students: Rs 700/-<br/>
      	b)	Teaching Faculty - Rs 1500 /- <br/>
        c)	Head of the Department – Rs 2000/- <br/>
        d)	Principal /Director- Rs 3000/-<br/>
        e)	Institute  - Rs 5000/-<br/>
      </Text>
      <Text marginStart={"300"} fontWeight="bold" color="black" fontSize="xl">
      Industry  Excellence category - Rs 5000/-   <br/></Text>
      <Text marginStart={"300"}fontWeight="bold" color="black" fontSize="xl">
      Startup Excellence category - Rs 3000/-   <br/></Text><br/>
      <Center><Text fontWeight={"bold"} fontSize="xl">Note:</Text>20% fee waiver is applicable for IEI members.</Center>
      <br/>
      <br/>
     </Text> */}
      {/* <Center>
      <Image
        src="/feetable.jpg"
        alt="feetable"
        width={700}
        height={700}

      />
      </Center> */}
      <Text>
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
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
      </Text>

      <br />
      <br />
      <br />
      <Text>
        <Footer />
      </Text>
    </div>
  );
};

export default generalInstructions;
