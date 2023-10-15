// pages/api/auth/account/create.ts

import { AxiosError } from "axios";
import axiosInstance from "@/utils/axiosInstance";

export async function POST(req: Request, res: Response) {
  try {
    // Parse the request body to get user registration data
    const { password, email } = await req.json();

    // Send a POST request to the backend API with type annotations
    const response = await axiosInstance.post("auth/account/create", {
      password,
      email,
    });

    // If the registration is successful, send back the response from the backend
    return new Response(
      JSON.stringify({
        email: email,
        password: password,
        ...(response?.data && response?.data),
      }),
      { status: response?.status != 204 ? response?.status : 200 }
    );
  } catch (e) {
    // Handle registration errors
    const error = e as AxiosError;
    return new Response(JSON.stringify(error?.response?.data), { status: error?.response?.status || 500 });
  }
}

export async function GET(req: Request, res: Response) {
  return new Response("Welcome");
}
