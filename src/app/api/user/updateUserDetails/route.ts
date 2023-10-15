// pages/api/user/updateUserDetails.ts

import { NextApiRequest, NextApiResponse } from 'next';
import userAxiosInstance from '@/utils/userAxiosInstance';
import { AxiosError } from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      // Get the user ID from the query parameters
      const userId = req.query.userId as string;

      // Parse the request body to get parameters like display_name, avatar, presence, profile, badges, and flags
      const {
        display_name,
        avatar,
        presence,
        profile,
        badges,
        flags,
        remove,
      } = req.body;

      // Create an object to hold the updated user details
      const updatedUserDetails = {
        display_name,
        avatar,
        presence,
        profile,
        badges,
        flags,
        remove,
      };

      // Send a PATCH request using the userAxiosInstance to update the user's details
      const response = await userAxiosInstance.patch(`/users/${userId}`, updatedUserDetails);

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
