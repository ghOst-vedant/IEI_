import Head from 'next/head'
import {
    Center, Link, Table, Text,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import VideoBackground from '../components/VideoBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBa from '../components/Navba';
import NextLink from "next/link"
import React from 'react';

const regionalAcademic = () => {
    return (
        <div>
            <Head>
                <title>Categories- IEI-NMLC FCRIT</title>
                <meta name="title" content="IEI-BLC FCRIT" />

            </Head>
            <VideoBackground />
            <Header /><NavBa />
            <Center fontSize="6xl" fontWeight="bold" color="black">
                Regional Academic Excellence
            </Center>

            <br />
            <br />

            <Center>
            <TableContainer>
                    <Table variant='simple' size='sm' width={'800px'} height={'150px'} style={{ border: '2px solid black' }}>

                        <Tbody>
                            <Tr>
                                    <Td style={{ textAlign: 'center', border: '1px solid black'}}>
                                        <NextLink href='/categories/researchExcellenceStudent' passHref>
                                            <Link>
                                            <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Student <br />
                                                </Text>
                                                </Link> 
                                        </NextLink>
                                    </Td>
                                    <Td Text fontSize="2xl" fontWeight="bold" color="black" style={{ textAlign: 'center',border: '1px solid black' }}>
                                        <NextLink href='/categories/academicExcellenceDivyangStu' passHref>
                                            <Link>
                                        Divyang Student<br />
                                        </Link>
                                        </NextLink>
                                    </Td>
                            </Tr>
                            <Tr>
                               
                                    <Td style={{ textAlign: 'center', border: '1px solid black'}}>
                                        <NextLink href='/categories/academicExcellenceTeacher' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Teaching Faculty <br />
                                                </Text>
                                            </Link>
                                        </NextLink>
                                    </Td>
                                    <Td style={{ textAlign: 'center', border: '1px solid black'}}>
                                        <NextLink href='/categories/academicExcellenceHOD' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                    Head of Department <br />
                                                </Text>
                                             </Link>
                                        </NextLink>
                                    </Td>
                              

                            </Tr>

                            <Tr>
                                    <Td  style={{ textAlign: 'center',border: '1px solid black' }}> 
                                        <NextLink href='/categories/academicExcellencePrincipal' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                  Principal/Director <br />
                                                </Text>
                                                </Link>
                                        </NextLink>
                                    </Td>
                                    <Td  style={{ textAlign: 'center',border: '1px solid black' }}> 
                                        <NextLink href='/categories/academicExcellenceInstitute' passHref>
                                            <Link>
                                                <Text fontSize="2xl" fontWeight="bold" color="black">
                                                  Institute <br />
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
            <br />
            <Footer />
        </div>
    );
};

export default regionalAcademic;