import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {submit('https://john.com/contactme', values)},
    validationSchema: Yup.object({ 
      firstName: Yup.string().required("Required"), 
      email: Yup.string().email("Invalid email address").required("Required"), 
      comment: Yup.string() 
        .min(25, "Must be at least 25 characters") 
        .required("Required"), 
    }), 
  });

  // e) **Show an alert when the form is submitted successfully**.

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]);

  

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#FD883D"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color="#553566">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit} >
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName" color="#553566" fontSize="20px" fontWeight="bolder">Name</FormLabel>
                
                <Input id="firstName" name="firstName" color="#553566" border-color= "#553566" fontSize="15px" fontWeight="bolder"
                {...formik.getFieldProps('firstName')}/>


                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email" color="#553566" fontSize="20px" fontWeight="bolder">Email Address</FormLabel>
                <Input id="email" name="email" type="email" color="#553566" fontSize="15px" fontWeight="bolder"{...formik.getFieldProps('email')}/>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type" color="#553566" fontSize="20px" fontWeight="bolder">Type of enquiry</FormLabel>
                <Select id="type" name="type" color="#553566" fontSize="15px" fontWeight="bolder"
                {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment" color="#553566" fontSize="20px" fontWeight="bolder">Your message</FormLabel>
                <Textarea id="comment" name="comment" height={250} color="#553566" fontSize="15px" fontWeight="bolder"
                {...formik.getFieldProps("comment")}/>
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" backgroundColor="#553566" width="full" color="#FAEFE6" fontSize="20px"
                _hover={{ boxShadow: "xl", transform: "scale(1.05)", backgroundColor: "#553566" }}
                transition="all 0.3s"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
