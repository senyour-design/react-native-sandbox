import React from "react";
import { NativeBaseProvider } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}