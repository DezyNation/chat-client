"use client";
import useApiHandler from "@/hooks/useApiHandler";
import useAuth from "@/hooks/useAuth";
import userAxiosInstance from "@/utils/userAxiosInstance";
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
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsEye, BsEyeSlash, BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();
  const { handleError, showToast } = useApiHandler();
  const { colorMode, toggleColorMode } = useColorMode();
  const { login, user } = useAuth();

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
        const res = await login(values);
        if (res?.data?.token) {
          push("/v1/app");
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
          Login
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
            isLoading={loading}
            onClick={Formik.handleSubmit}
          >
            Login
          </Button>
          <Link href={"#"}>
            <Text
              fontSize={"xs"}
              textAlign={"center"}
              color={"twitter.500"}
              my={4}
            >
              Forgot Password
            </Text>
          </Link>
        </Box>
        <Box mt={16}>
          <Link href={"/register"}>
            <Text
              fontSize={"xs"}
              textAlign={"center"}
              color={"twitter.500"}
              my={4}
            >
              Don't have an account? Register here.
            </Text>
          </Link>
        </Box>
        <Box mt={4}>
          <Text fontSize={"xs"} textAlign={"center"}>
            By using our services, you agree to our
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

export default Login;
