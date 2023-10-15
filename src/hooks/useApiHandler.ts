"use client";
import { useToast } from "@chakra-ui/react";
import useAuth from "./useAuth";

type ToastStatus = "info" | "success" | "warning" | "error";

type ToastData = {
  status?: ToastStatus;
  title?: string;
  description: string;
};

const useApiHandler = () => {
  const Toast = useToast();

  const handleError = (error: any, title?: string) => {
    Toast({
      status: "error",
      ...(title && { title: title }),
      description:
        error?.response?.data?.type ||
        error?.response?.data?.error?.reason ||
        error?.message,
    });
  };

  const showToast = ({ status = "info", title, description }: ToastData) => {
    Toast({
      status: status || "info",
      ...(title && { title: title }),
      description: description,
    });
  };

  return {
    handleError,
    showToast,
  };
};

export default useApiHandler;
