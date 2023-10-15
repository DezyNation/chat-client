"use client";
import { useState } from "react";
import localAxiosInstance from "@/utils/localAxiosInstance";
import { AUTH_RANDOM_STRING } from "@/constants";
import useApiHandler from "./useApiHandler";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const {handleError} = useApiHandler();

  const register = async (userData: any) => {
    try {
      // Make a POST request to register a user
      const response = await localAxiosInstance.post(
        `/api/auth/register/${AUTH_RANDOM_STRING}`,
        userData
      );

      // Update the user state with the response data
      return response
    } catch (error) {
      // Handle registration errors and set the error state
      console.log(error);
      handleError(error, "Error while signup")
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
      return response
    } catch (error) {
      // Handle registration errors and set the error state
      console.log(error);
      handleError(error, "Error while login")
      throw new Error(error)
    }
  };

  const logout = async () => {
    try {
      // Make a POST request to log out the user
      await localAxiosInstance.post(`/api/auth/logout`);

      // Clear the user state to indicate that the user is logged out
      return true
    } catch (error) {
      // Handle registration errors and set the error state
      throw new Error(error);
    }
  };

  return { user, register, login, logout };
};

export default useAuth;
