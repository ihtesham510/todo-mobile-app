import * as React from 'react'
import {
  Text,
  Box,
  Center,
  VStack,
  useTheme,
  themeTools,
  useColorMode,
  useColorModeValue,
} from 'native-base';
import Themetoggle from '../Components/theme-toggle';
export default function MainScreen() {
  return (
    <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1} >
      <VStack space={5} alignItems="center"></VStack>
      <Box>
        <Text>hellow world</Text>
        <Themetoggle />
      </Box>
    </Center>
  )
}
