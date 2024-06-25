import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from '../images/log.png';

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/Mohamed-Ahlam",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahlammohamed/",
  },
];

const Header = () => {
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
    <Box
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={1000} 
      // backgroundColor="#553566" 
      backgroundColor="#FAEFE6" 
      // borderBottom="5px solid #3D1F4E"
      // paddingBottom="100px"
    >
      <Box  color=" #553566"  maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src={logo} alt="Logo" boxSize="50px" /> 
          <HStack spacing={8}>
            <a href="/#projects" onClick={handleClick("projects")}>
              Projects
            </a>
            <a href="/#contactme" onClick={handleClick("contactme")}>
              Contact Me
            </a>
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
