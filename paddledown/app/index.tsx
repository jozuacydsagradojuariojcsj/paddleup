import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BookingScreen from "./screens/BookingScreen.js";
import CoachScreen from "./screens/CoachScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import LandingScreen from "./screens/LandingScreen.js";
import LogInScreen from "./screens/LogInScreen.js";
import SignUpScreen from "./screens/SignUpScreen.js";
import SuccessfullyBookedScreen from "./screens/SuccessfullyBookedScreen.js";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <GluestackUIProvider>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Coach" component={CoachScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Success" component={SuccessfullyBookedScreen} />
      </Stack.Navigator>
    </GluestackUIProvider>
  );
}
