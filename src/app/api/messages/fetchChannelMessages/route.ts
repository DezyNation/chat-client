// pages/api/channels/fetchChannelMessages.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance'; // Using userAxiosInstance for messaging-related requests
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Get the target channel ID from the query parameters
      const targetChannelId = req.query.target as string;

      // Define query parameters based on the request
      const queryParams: Record<string, any> = {};
      if (req.query.limit) {
        queryParams.limit = req.query.limit;
      }
      if (req.query.before) {
        queryParams.before = req.query.before;
      }
      if (req.query.after) {
        queryParams.after = req.query.after;
      }
      if (req.query.sort) {
        queryParams.sort = req.query.sort;
      }
      if (req.query.nearby) {
        queryParams.nearby = req.query.nearby;
      }
      if (req.query.include_users) {
        queryParams.include_users = req.query.include_users;
      }

      // Send a GET request using the userAxiosInstance to fetch messages in the channel
      const response = await userAxiosInstance.get(`/channels/${targetChannelId}/messages`, {
        params: queryParams,
      });

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
