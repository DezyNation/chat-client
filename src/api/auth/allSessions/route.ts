// pages/api/auth/session/allSessions.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Send a GET request to the backend API to fetch all user sessions using the Axios instance
      const response = await axiosInstance.get('/auth/session/all');

      // If the fetch is successful, send back the sessions from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle fetch sessions errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not GET
    res.status(405).end();
  }
};
