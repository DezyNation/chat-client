import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for messaging-related requests
import { AxiosError } from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Generate a unique Idempotency-Key using uuid
      const idempotencyKey = uuidv4();

      // Get the target channel ID from the query parameters
      const targetChannelId = req.query.target as string;

      // Define the request body based on the specified parameters
      const messageData = {
        content: req.body.content,
        attachments: req.body.attachments,
        replies: req.body.replies,
        embeds: req.body.embeds,
      };

      // Send a POST request using the userAxiosInstance to send the message
      const response = await userAxiosInstance.post(`/channels/${targetChannelId}/messages`, messageData, {
        headers: {
          'Idempotency-Key': idempotencyKey,
        },
      });

      // If the request is successful, send back the response from the backend
      res.status(response.status).json(response.data);
    } catch (e) {
      // Handle errors and throw them as AxiosError
      const error = e as AxiosError;
      res.status(error.response?.status || 500).json({ error });
    }
  } else {
    // Return a method not allowed error if the request method is not POST
    res.status(405).end();
  }
};
