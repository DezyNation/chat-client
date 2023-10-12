// pages/api/channels/deleteMessage.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for messaging-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      // Get the target channel ID and message ID from the query parameters
      const targetChannelId = req.query.target as string;
      const messageId = req.query.msg as string;

      // Send a DELETE request using the userAxiosInstance to delete the specific message
      const response = await userAxiosInstance.delete(`/channels/${targetChannelId}/messages/${messageId}`);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not DELETE
    res.status(405).end();
  }
};
