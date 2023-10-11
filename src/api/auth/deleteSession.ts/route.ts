// pages/api/auth/session/deleteSession.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from '@/utils/axiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      // Get the session ID from the query parameters
      const sessionId = req.query.sessionId as string;

      // Send a DELETE request to the backend API to delete the specific session
      const response = await axiosInstance.delete(`/auth/session/${sessionId}`);

      // If the deletion is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle session deletion errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not DELETE
    res.status(405).end();
  }
};
