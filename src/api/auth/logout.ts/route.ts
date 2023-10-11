// pages/api/auth/session/logout.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Send a POST request to the backend API for user logout using the Axios instance
      const response = await axiosInstance.post('/auth/session/logout');

      // If the logout is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle logout errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not POST
    res.status(405).end();
  }
};
