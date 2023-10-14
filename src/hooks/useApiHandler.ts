"use client";

import { useToast } from "@chakra-ui/react";
import useAuth from "./useAuth";

const useApiHandler = () => {
  const { logout } = useAuth();
  const Toast = useToast();

  const handleError = (error: any, title?: string) => {
    if (error?.response?.status == 401) {
      Toast({
        status: "warning",
        title: "Your session expired!",
        description: "Please login again",
      });
      logout();
      return;
    }
    Toast({
      status: "error",
      ...(title && { title: title }),
      description:
        error?.response?.data?.error?.message ||
        error?.response?.data?.message ||
        error?.message,
    });
  };

  return {
    handleError,
  };
};

export default useApiHandler;