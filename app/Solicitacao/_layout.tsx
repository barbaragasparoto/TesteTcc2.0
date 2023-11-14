import { Stack } from "expo-router";

export default function SolicitacaoLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}