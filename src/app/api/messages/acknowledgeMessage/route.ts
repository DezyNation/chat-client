// pages/api/channels/acknowledgeMessage.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for messaging-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      // Get the target channel ID and message ID from the query parameters
      const targetChannelId = req.query.target as string;
      const messageId = req.query.message as string;

      // Send a PUT request using the userAxiosInstance to acknowledge that the message has been read
      const response = await userAxiosInstance.put(`/channels/${targetChannelId}/ack/${messageId}`);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not PUT
    res.status(405).end();
  }
};
