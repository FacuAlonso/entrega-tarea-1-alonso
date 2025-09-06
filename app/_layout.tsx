import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="contador" options={{headerTitle:"tiot", headerShown: false }} />
      </Stack>
  );
}
