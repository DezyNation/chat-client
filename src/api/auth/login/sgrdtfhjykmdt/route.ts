// pages/api/auth/session/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import userAxiosInstance from '@/utils/userAxiosInstance';
import { AxiosError } from 'axios';
import { setCookie } from 'nookies';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Parse the request body to get the username and password
      const { username, password } = req.body;

      // Send a POST request to the backend API to log in
      const response = await axiosInstance.post('/auth/session/login', {
        username,
        password,
      });

      // If the login is successful, save the token in secure cookies
      setCookie({ res }, 'sessionToken', response.data.token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // Example: 1 week expiration
        path: '/',
      });

      // Use the token with the userAxiosInstance
      userAxiosInstance.defaults.headers.common['x-session-token'] = response.data.token;

      // Send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle login errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not POST
    res.status(405).end();
  }
};
