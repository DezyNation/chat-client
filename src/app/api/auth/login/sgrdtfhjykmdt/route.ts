// pages/api/auth/session/login.ts

import { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "@/utils/axiosInstance";
import userAxiosInstance from "@/utils/userAxiosInstance";
import { AxiosError } from "axios";
import { setCookie } from "nookies";
import { JWT_SECRET, MAX_AGE } from "@/constants";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(req: Request, res: Response) {
  try {
    // Parse the request body to get the email and password
    const { email, password } = await req.json();

    // Send a POST request to the backend API to log in
    const response = await axiosInstance.post("/auth/session/login", {
      email,
      password,
    });

    // Generating a client side jwt based access token using jsonwebtoken
    const accessToken = jwt.sign(
      {
        user_id: response?.data?.user_id,
      },
      JWT_SECRET,
      {
        algorithm: "HS256",
        expiresIn: MAX_AGE,
      }
    );

    const serializedToken = serialize("sessionToken", response.data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    const serializedAccessToken = serialize("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: MAX_AGE,
      path: "/",
    });

    // Use the token with the userAxiosInstance
    userAxiosInstance.defaults.headers.common["x-session-token"] =
      response.data.token;

    // Send back the response from the backend
    return new Response(JSON.stringify(response?.data), {
      status: response?.status,
      headers: {
        "Set-Cookie": [serializedToken, serializedAccessToken],
      },
    });
  } catch (e) {
    // Handle login errors and throw them as AxiosError
    const error = e as AxiosError;
    return new Response(JSON.stringify(error?.response?.data), {
      status: error?.response?.status || 500,
    });
  }
}
