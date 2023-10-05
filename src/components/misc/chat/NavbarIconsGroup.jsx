"use client";
import React from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import {BsPinAngle, BsThreeDotsVertical} from 'react-icons/bs'
import { FiSearch } from "react-icons/fi";

const NavbarIconsGroup = () => {
  return (
    <>
      <HStack gap={2}>
        <IconButton bgColor={'transparent'} icon={<BsPinAngle size={20} />} rounded={"full"} />
        <IconButton bgColor={'transparent'} icon={<FiSearch size={20} />} rounded={"full"} />
        <IconButton bgColor={'transparent'} icon={<BsThreeDotsVertical size={20} />} rounded={"full"} />
      </HStack>
    </>
  );
};

export default NavbarIconsGroup;
