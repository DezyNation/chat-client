"use client";
import useApiHandler from "@/hooks/useApiHandler";
import useAuth from "@/hooks/useAuth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { BsEye, BsEyeSlash, BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { handleError, showToast } = useApiHandler();
  const { colorMode, toggleColorMode } = useColorMode();
  const { register } = useAuth();

  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (!values.email || !values.password) {
        showToast({
          description: "All fields are required",
        });
        return;
      }
      try {
        setLoading(true);
        const res = await register(values);
        if (res?.data) {
          console.log("Registration Response");
          console.log(res?.data);
          setLoading(false);
          showToast({
            status: "success",
            title: "Registration successful!",
            description: "Please login now",
          });
          return;
        }
      } catch (err) {
        console.log("Err in catch block");
        console.log(err);
        setLoading(false);
      }
    },
  });

  return (
    <>
      <VStack w={"full"} h={"100vh"} justifyContent={"center"} p={[4, 8, 16]}>
        <Text fontSize={"2xl"} fontWeight={"semibold"} textAlign={"center"}>
          Register
        </Text>
        <br />
        <Box
          w={["full", "sm"]}
          p={4}
          rounded={8}
          border={"1px"}
          borderColor={colorMode == "dark" ? "gray.600" : "gray.400"}
        >
          <FormControl py={4}>
            <FormLabel fontSize={"xs"}>Email</FormLabel>
            <Input
              w={["full"]}
              placeholder="Your registered email ID"
              name="email"
              type="email"
              onChange={Formik.handleChange}
            />
          </FormControl>
          <FormControl py={4}>
            <FormLabel fontSize={"xs"}>Password</FormLabel>
            <InputGroup>
              <Input
                w={["full"]}
                placeholder="Your password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                onChange={Formik.handleChange}
              />
              <InputRightElement
                cursor={"pointer"}
                onClick={() => setPasswordVisible(!passwordVisible)}
                children={passwordVisible ? <BsEyeSlash /> : <BsEye />}
              />
            </InputGroup>
          </FormControl>
          <br />
          <Button
            w={"full"}
            colorScheme="twitter"
            onClick={Formik.handleSubmit}
            isLoading={loading}
          >
            Register
          </Button>
        </Box>
        <Box mt={16}>
          <Link href={"/login"}>
            <Text
              fontSize={"xs"}
              textAlign={"center"}
              color={"twitter.500"}
              my={4}
            >
              Already have an account? Login here.
            </Text>
          </Link>
        </Box>
        <Box mt={4}>
          <Text fontSize={"xs"} textAlign={"center"}>
            By registering, you agree to our
          </Text>
          <HStack>
            <Link href={"/login"}>
              <Text fontSize={"xs"} textAlign={"center"} color={"twitter.500"}>
                Terms & Conditions
              </Text>
            </Link>
            <Text fontSize={"xs"} textAlign={"center"}>
              and
            </Text>
            <Link href={"/login"}>
              <Text fontSize={"xs"} textAlign={"center"} color={"twitter.500"}>
                Privacy Policy
              </Text>
            </Link>
          </HStack>
        </Box>
      </VStack>

      <IconButton
        pos={"fixed"}
        top={4}
        right={4}
        onClick={toggleColorMode}
        icon={colorMode == "dark" ? <BsMoonStarsFill /> : <BsSunFill />}
      />
    </>
  );
};

export default Register;
