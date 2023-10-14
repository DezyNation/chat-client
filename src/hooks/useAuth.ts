"use client";
import { useState } from "react";
import localAxiosInstance from "@/utils/localAxiosInstance";
import { AUTH_RANDOM_STRING } from "@/constants";
import useApiHandler from "./useApiHandler";

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
      setUser(response.data);
    } catch (error) {
      // Handle registration errors and set the error state
      handleError(error, "Error while registration");
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
      setUser(response.data);
    } catch (error) {
      // Handle login errors and set the error state
      handleError(error, "Error while login");
    }
  };

  const logout = async () => {
    try {
      // Make a POST request to log out the user
      await localAxiosInstance.post(`/api/auth/logout`);

      // Clear the user state to indicate that the user is logged out
      setUser(null);
    } catch (error) {
      // Handle logout errors and set the error state
      handleError(error, "Error while logout");
    }
  };

  return { user, register, login, logout };
};

export default useAuth;
