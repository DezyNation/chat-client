// pages/api/auth/session/login.ts

import { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "@/utils/axiosInstance";
import userAxiosInstance from "@/utils/userAxiosInstance";
import { AxiosError } from "axios";
import { setCookie } from "nookies";
export async function POST(req: Request, res: Response) {
  try {
    // Parse the request body to get the email and password
    const { email, password } = await req.json();

    // Send a POST request to the backend API to log in
    const response = await axiosInstance.post("/auth/session/login", {
      email,
      password,
    });

    // If the login is successful, save the token in secure cookies
    setCookie({ res }, "sessionToken", response.data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // Example: 1 week expiration
      path: "/",
    });

    // Use the token with the userAxiosInstance
    userAxiosInstance.defaults.headers.common["x-session-token"] =
      response.data.token;

    // Send back the response from the backend
    return new Response(JSON.stringify(response?.data), { status: response?.status });
  } catch (e) {
    // Handle login errors and throw them as AxiosError
    const error = e as AxiosError;
    return new Response(JSON.stringify(error?.response?.data), { status: error?.response?.status || 500 });
  }
}
