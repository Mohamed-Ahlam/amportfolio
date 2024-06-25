import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection"
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider theme={theme}>
       <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <AboutSection/>
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
