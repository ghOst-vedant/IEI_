import React from "react";
import { Link, Box, Head, Flex, Text, Heading, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import Logos from "./Logos";
// import '../../styles/Home.module.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      {/* <Text fontWeight={"bold"}><p align="center" >IEI</p></Text> */}
      <div className="main-text" align="center">
        <Heading
          id="herofont"
          marginStart={"100"}
          fontSize={"5xl"}
          fontFamily={"fantasy"}
          style={{ fontFamily: "Old English Text MT" }}
          color="rgb(0, 0, 102)"
          align={"center"}
        >
          {" "}
          The Institution of Engineers (India){" "}
        </Heading>
        <Text
          marginStart={"100"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          color="blueviolet"
          align={"center"}
        >
          {" "}
          Navi Mumbai Local Centre{" "}
        </Text>
        {/* <Text fontWeight={"bold"} color="black" align={"center"}>Vibration Engineering, Science, and Technology (INVEST 22)</Text> */}
        <Text
          marginStart={"100"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          color="black"
          align={"center"}
        >
          And
        </Text>
        <Text
          marginStart={"100"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          color="black"
          align={"center"}
        >
          Agnel Charities' Fr. C. Rodrigues Institute of Technology
        </Text>
        <Text
          marginStart={"100"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          color="black"
          align={"center"}
        >
          Jointly Presents
        </Text>
        <Heading
          color="blue.800"
          marginStart={"100"}
          fontSize="5xl"
          fontWeight="extrabold"
          align="center"
        >
          IEI NMLC - FCRIT EXCELLENCE AWARDS
        </Heading>
      </div>
      <Logos />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      ></Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={1}
      borderBottom={"2px solid #DFF5FF"}
      p={8}
      bgImg={["bck.jpg"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
