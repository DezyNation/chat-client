"use client";

import { useState, useEffect } from "react";
import userAxiosInstance from "@/utils/userAxiosInstance";
import useApiHandler from "./useApiHandler";
import axios from "axios";

const useDMChannel = () => {
  const [dmChannels, setDMChannels] = useState([]);
  const [dmChannel, setDMChannel] = useState(null);
  const { handleError } = useApiHandler();

  // Function to fetch all DM channels
  const fetchDMChannels = async () => {
    try {
      const response = await userAxiosInstance.get("/users/dms");
      setDMChannels(response.data);
    } catch (error) {
      handleError(error, "Failed to fetch DM channels");
    }
  };

  // Function to create a new DM channel with a target user
  const createDMChannel = async (targetUserId: string) => {
    try {
      const response = await userAxiosInstance.get(
        `/users/${targetUserId}/dm`
      );
      setDMChannel(response.data);
    } catch (error) {
      handleError(error, "Failed to create a DM channel");
    }
  };

  // Fetch DM channels when the component is mounted
  useEffect(() => {
    fetchDMChannels();
  }, []);

  return { dmChannels, dmChannel, fetchDMChannels, createDMChannel };
};

export default useDMChannel;
