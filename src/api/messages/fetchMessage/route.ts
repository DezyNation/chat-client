// pages/api/channels/fetchMessage.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for messaging-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Get the target channel ID and message ID from the query parameters
      const targetChannelId = req.query.target as string;
      const messageId = req.query.msg as string;

      // Send a GET request using the userAxiosInstance to fetch the specific message
      const response = await userAxiosInstance.get(`/channels/${targetChannelId}/messages/${messageId}`);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not GET
    res.status(405).end();
  }
};
