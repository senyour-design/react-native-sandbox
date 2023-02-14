import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Flex, Input } from "native-base";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center" h={'100%'} w={'100%'}>
        <Flex gap={10} flexDir={'row'}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Input variant="rounded" placeholder="name" />
        </Flex>
      </Box>
    </NativeBaseProvider>
  );
}