import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen.js";
import LandingScreen from "./screens/LandingScreen.js";
import LogInScreen from "./screens/LogInScreen.js";
import SignUpScreen from "./screens/SignUpScreen.js";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <GluestackUIProvider>
        <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </GluestackUIProvider>
  );
}
