import React from "react";
import FullScreenSection from "./FullScreenSection";
import {Image, Box, Flex, Heading } from "@chakra-ui/react";
import Card from "./Card";

import orange from '../images/orange.png';

const projects = [
  {
    title: "Booking at Little Lemon",
    description:
      "Developed a robust website for Little Lemon, a popular dining spot, and also created a way for users to make an online reservation at this restaurant.",
    getImageSrc: () => require("../images/littleLemon.png"),
    url: "https://github.com/Mohamed-Ahlam/BookingLittleLemon-react"
  },
  {
    title: "DJ Days",
    description:
      "A dynamic single-webpage application designed to bring music lovers a virtual DJ booth at their fingertip by letting users browse through a comprehensive list of albums, add new albums to their collection, and more!🔥️",
    getImageSrc: () => require("../images/music.png"),
    url: "https://github.com/Mohamed-Ahlam/dj_days"
    
  },
  {
    title: "S.W.I.S.H",
    description:
      "Made a simplified command-line shell called swish (aka Simple Working Implementation Shell). This shell will be less functional in many ways from standard shells like bash (the default on most Linux machines), but will still have some useful features.",
    getImageSrc: () => require("../images/terminal.png"),
    url: "https://github.com/Mohamed-Ahlam/simplified-shell"
  },
  {
    title: "Art Gallery",
    description:
      "A dynamic single-page application crafted with React for art enthusiasts and collectors. This application offers a virtual gallery experience, enabling users to manage their art collection efficiently",
    getImageSrc: () => require("../images/artgallery.jpg"),
    url: "https://github.com/Mohamed-Ahlam/react-art-gallary"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#553566"
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
<Flex
  direction="row"
  align="center"
>
<Image
            height="80px"
            width="80px"
            src={orange}
            alt="Dark green lotus logo"
            margin="0"
          />

<Heading as="h1" id="projects-section" mt={16} color="#FAEFE6" fontFamily="Hagrid" margin="0">
        Featured Projects
      </Heading>
</Flex>
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={8}
        mt={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
            backgroundColor="#FAEFE6"
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
