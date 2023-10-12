// pages/api/channels/editMessage.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for messaging-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      // Get the target channel ID and message ID from the query parameters
      const targetChannelId = req.query.target as string;
      const messageId = req.query.msg as string;

      // Define the request body to specify the content and embeds for the message update
      const messageUpdateData = {
        content: req.body.content,
        embeds: req.body.embeds,
      };

      // Send a PATCH request using the userAxiosInstance to edit the specific message
      const response = await userAxiosInstance.patch(`/channels/${targetChannelId}/messages/${messageId}`, messageUpdateData);

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not PATCH
    res.status(405).end();
  }
};
