"use client";
import {
  Box,
  HStack,
  IconButton,
  Spacer,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";

const IconCard = ({
  icon,
  title,
  caption,
  onClick,
  hasSwitch,
  switchStatus,
}) => {
  const { colorMode } = useColorMode();
  const fadedColor = colorMode == "dark" ? "whiteAlpha.700" : "blackAlpha.700";

  const handleClick = (params) => {
    if (!onClick) {
      console.log(title, " Clicked!");
      return;
    }
    onClick(params);
  };

  return (
    <>
      <HStack w={"full"} p={2} cursor={"pointer"} onClick={() => handleClick()}>
        <IconButton icon={icon || <BsInfoCircle />} />
        <Box>
          <Text fontSize={"sm"} fontWeight={"medium"}>
            {title}
          </Text>
          {caption ? (
            <Text
              fontSize={"10px"}
              color={fadedColor}
              textTransform={"capitalize"}
            >
              {caption}
            </Text>
          ) : null}
        </Box>
        {hasSwitch ? <Spacer /> : null}
        {hasSwitch ? <Switch isChecked={switchStatus} /> : null}
      </HStack>
    </>
  );
};

export default IconCard;
