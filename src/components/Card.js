import { Heading, Flex, Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc, url}) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      borderColor = "#D46BCA"
      overflow="hidden"
      bg="#F9F3EE"
      boxShadow="2xl"
      _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
      transition="all 0.3s"
      m="4"
      backgroundColor ="#553566"
    >
      {/* <Box p="4">
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Box ml="3">
              <Heading size="md" fontFamily="Hagrid" color="#FAEFE6" borderBottom ="solid #FD883D" paddingBottom ="5px" paddingRight ="200px"

              >{title}</Heading>
            </Box>
          </Flex>
        </Flex>
      </Box> */}
      <Image src={imageSrc} alt={title} maxWidth="100%" width="100%" height="200px"/>
      <Box p="4">
      <Heading size="md" fontFamily="Hagrid" color="#FAEFE6" borderBottom ="solid #FD883D" paddingBottom ="5px" marginBottom ="25px" paddingRight ="200px"
      >{title}</Heading>

        <Text color="#FAEFE6">{description}</Text>
        <Flex justifyContent="flex-end">

        <a href={url}>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="#FD883D "/>
        </a>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
