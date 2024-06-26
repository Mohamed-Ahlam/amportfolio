import React from "react";
import { Image, Box, Flex, Heading, Stack, Text, Button } from "@chakra-ui/react";
import logo from '../images/image.png';

const greeting = "Hi, I'm";
const name = "Ahlam Mohamed"
const bio1 = "Front End Developer";
const bio2 = "Aspiring front-end developer with a passion for creating beautiful and functional user interfaces.";

const LandingSection = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Flex
      direction="row"
      align="center"
      m="0 auto"
      minH="100vh"
      justify="center"
      backgroundColor =" #FAEFE6"
      // bgGradient="linear(to-r,  #FAEFE6,  #FAEFE6)"
      px={4}
    >
      {/* <Flex
        align="center"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        width="100%"
        maxW="1200px"
        mx="auto"
        p={6}
        bg="#F9F3EE"
        boxShadow="2xl"
        borderRadius="lg"
      > */}
        <Box
          // w={{ base: "100%", md: "40%" }}
          display="flex"
          // justifyContent="center"
          // mb={{ base: 8, md: 0 }}

          
        >
          
        </Box>
        <Stack
          spacing={4}
          w={{ base: "100%", md: "60%" }}
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          fontFamily="Hagrid"
          p={4}
        >
          <Heading as="h1" size="xl" fontFamily="Hagrid" color="#553566"  >
            {greeting}
          </Heading>
          <Heading as="h1" size="2xl" color="#D46BCA" fontFamily="Hagrid" fontWeight="bolder">
            {name}
          </Heading>
          <Text fontSize="2xl" color="#553566 " fontWeight="semibold">
            {bio1}
          </Text>
          <Text fontSize="xl" color="#553566 " fontWeight="normal">
            {bio2}
          </Text>
          <Button
            onClick={handleClick("projects")}
            backgroundColor="#FD883D"
            fontWeight="bolder"
            color="white"
            size="lg"
            mt={4}
            boxShadow="lg"
            _hover={{ boxShadow: "xl", transform: "scale(1.05)", backgroundColor: "#553566 " }}
            transition="all 0.3s"
          >
            My work
          </Button>
        </Stack>
        <Image
            height="400px"
            width="150px"
            src={logo}
            alt="Dark green lotus logo"
          />
      </Flex>
      
    // </Flex>
  );
};

export default LandingSection;
