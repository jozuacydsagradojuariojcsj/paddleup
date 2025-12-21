import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";

import LandingScreen from "../app/screens/LandingScreen.js";
import LogInScreen from "../app/screens/LogInScreen.js";
import SignUpScreen from "../app/screens/SignUpScreen.js";
import HomeScreen from "../app/screens/HomeScreen.js";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
