import { Box, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react';

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
    >
      <Text>{colorMode}</Text>
      <Switch onChange={()=>toggleColorMode()} size={'sm'} />
    </Box>
  )
}

export default ThemeSwitcher