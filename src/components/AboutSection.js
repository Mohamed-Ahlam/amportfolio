import React from "react";
import { Image, Box, Flex, Heading, Stack, Text, HStack } from "@chakra-ui/react";
import purple from '../images/purple.png';
import headshot from '../images/me2.png';

const title = "About Me";
const aboutText = `
  Hi, I'm Ahlam Mohamed! I have a bachelors in IT Infrastructure from the University of Minnesota and I earned a Meta Front-End Developer Certificate from doing the
Hack The Gap Front-End Development Bootcamp. As a developer, I specialise in building captivating user interfaces that seamlessly blend aesthetics with functionality. With a strong foundation in HTML, CSS, and JavaScript, I am dedicated to creating responsive, accessible, and intuitive web experiences. When I'm not coding, I enjoy taking hikes, playing with my two cats, and trying out new technologies!
`;

const AboutMeSection = () => (
  <Flex
    direction="column"
    align="center"
    m="0 auto"
    minH="100vh"
    justify="center"
    bg="#DFD6A9"
    px={4}
    backgroundColor="#FAEFE6"
  >
    <Flex
      align="center"
      justify="space-between"
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      width="100%"
      maxW="1200px"
      mx="auto"
      p={6}
    >
      <Box
        w={{ base: "100%", md: "40%" }}
        display="flex"
        justifyContent="center"
        mb={{ base: 8, md: 0 }}
      >
        <Image
          boxSize="300px"
          src={headshot}
          alt="Close up photograph of a Ahlam Mohamed"
          borderRadius="full"
          boxShadow="2xl"
        />
      </Box>
      <Stack
        spacing={4}
        w={{ base: "100%", md: "60%" }}
        align={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
        p={4}
      >
        <HStack>
        <Image
            height="80px"
            width="80px"
            src={purple}
            alt="Dark green lotus logo"
            margin="0"
          />
        <Heading as="h1" size="2xl" fontWeight="bold" color=" #553566">
          {title}
        </Heading>
        </HStack>
        
        <Text fontSize="lg" color=" #553566" fontWeight="normal" whiteSpace="pre-line">
          {aboutText}
        </Text>
      </Stack>
    </Flex>
  </Flex>
);

export default AboutMeSection;
