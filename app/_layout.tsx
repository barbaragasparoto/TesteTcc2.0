import React from "react";

import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

export default function AppLayout() {

  const queryClient = new QueryClient()

  
  return (
    <QueryClientProvider client={queryClient}>
    <Stack>
      <StatusBar />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
    </Stack>
    </QueryClientProvider>
  );
}
