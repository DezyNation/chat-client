// pages/api/auth/session/logout.ts

import { NextApiRequest, NextApiResponse } from "next";
import { AxiosError } from "axios";
import userAxiosInstance from "@/utils/userAxiosInstance";
import { cookies } from "next/headers";
import { serialize } from "cookie";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const serializedToken = serialize("sessionToken", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  const serializedAccessToken = serialize("accessToken", "", {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });
  try {
    const cookieStore = cookies();
    userAxiosInstance.defaults.headers.common["x-session-token"] =
      cookieStore.get("sessionToken")?.value;
    // Send a POST request to the backend API for user logout using the Axios instance
    await userAxiosInstance.post("/auth/session/logout");

    // If the logout is successful, send back the response from the backend
    return new Response(JSON.stringify({ message: "Logout successful!" }), {
      status: 200,
      headers: {
        "Set-Cookie": [serializedToken, serializedAccessToken],
      },
    });
  } catch (e) {
    // Handle logout errors and throw them as AxiosError
    const error = e as AxiosError;
    return new Response(JSON.stringify(error?.response?.data), {
      status: error?.response?.status || 500,
      headers: {
        "Set-Cookie": [serializedToken, serializedAccessToken],
      },
    });
  }
}
