"use client";
import { useState } from "react";
import localAxiosInstance from "@/utils/localAxiosInstance";
import { AUTH_RANDOM_STRING } from "@/constants";
import useApiHandler from "./useApiHandler";
import userAxiosInstance from "@/utils/userAxiosInstance";
import { destroyCookie } from "nookies";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const { handleError } = useApiHandler();

  const register = async (userData: any) => {
    try {
      // Make a POST request to register a user
      const response = await localAxiosInstance.post(
        `/api/auth/register/${AUTH_RANDOM_STRING}`,
        userData
      );

      // Update the user state with the response data
      return response;
    } catch (error) {
      // Handle registration errors and set the error state
      console.log(error);
      handleError(error, "Error while signup");
      throw new Error(error);
    }
  };

  const login = async (userData: any) => {
    try {
      // Make a POST request to log in a user
      const response = await localAxiosInstance.post(
        `/api/auth/login/${AUTH_RANDOM_STRING}`,
        userData
      );

      // Update the user state with the response data
      return response;
    } catch (error) {
      // Handle registration errors and set the error state
      console.log(error);
      handleError(error, "Error while login");
      throw new Error(error);
    }
  };

  const logout = async () => {
    try {
      // Make a POST request to log out the user
      await localAxiosInstance.post(`/api/auth/logout`);
    } catch (error) {
      // Handle registration errors and set the error state
      console.log(error)
    } finally {
      window.location.replace("/login");
    }
  };

  return { user, register, login, logout };
};

export default useAuth;
