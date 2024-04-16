
import React from 'react';
import { Center, Flex, Text, HStack, VStack, Box, Link } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon,LinkIcon } from '@chakra-ui/icons'
import FooterMap from './FooterMap';

const FooterContacts = () => {
    return (
        <Box >
            <HStack spacing={'40px'} marginLeft={'60px'} marginBottom={'35px'}>
                <FooterMap />
                <VStack alignItems={'start'}>

                    
                    <HStack spacing={'30px'} >
                    <LinkIcon boxSize={8}/>
                    <Link href='http://ieinmlc.org/' isExternal fontSize="2xl" paddingRight={"35"}>
                        http://ieinmlc.org/
                    </Link>
                    <LinkIcon boxSize={8}/>
                    <Link href='https://iei-ea.fcrit.ac.in/' isExternal fontSize="2xl">
                    https://iei-ea.fcrit.ac.in/
                    </Link>
                    </HStack>
                    <br/>

                    <HStack spacing={'30px'} >
                    <EmailIcon boxSize={8}/>
                    <Text marginStart={"50"} fontSize="2xl">belapurlc@ieindia.org</Text>
                    <EmailIcon boxSize={8}/>
                    <Text marginStart={"50"} fontSize="2xl">ieifcritawards@fcrit.ac.in</Text>
                    </HStack>
                        <br/>
                    
                    <HStack spacing={'30px'}>
                    <PhoneIcon boxSize={8}/>
                    <Text marginStart={"50"} fontSize="2xl" paddingRight={"59"}>+022-27579935</Text>
                    <PhoneIcon boxSize={8}/>
                    <Text marginStart={"50"} fontSize="2xl">+022-27771000</Text>
                    </HStack>
                    <br/>

                    

                    

                </VStack>
            </HStack>
        </Box>
    );
};

export default FooterContacts;







