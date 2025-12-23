import { Stack } from "expo-router";
import "@/global.css";
import { PortalHost } from "@rn-primitives/portal";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <PortalHost />
    </Stack>
  );
}
