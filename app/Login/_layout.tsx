import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="solicitacao" options={{  headerBackButtonMenuEnabled: true }} />
    </Stack>
  );
}
