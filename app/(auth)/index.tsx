import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import Logo from "../componentes/Logo";
import { useRouter } from "expo-router";

export default function Login() {
  const [text] = useState("");
  const router = useRouter();
  return (
    <View style={estilos.container}>
      <Logo />
      <View style={estilos.conteudo}>
        <TextInput
          style={estilos.input}
          placeholder="Email:"
          placeholderTextColor="white"
        />
        <TextInput
          secureTextEntry={true}
          style={estilos.input}
          placeholder="Senha:"
          placeholderTextColor="white"
        />
        <Text style={estilos.texto}>{text}</Text>
        <Pressable
          style={estilos.botao}
          onPress={() => router.replace("(tabs)")}
        >
          <Text style={estilos.texto}>Entrar</Text>
        </Pressable>
        <Pressable onPress={() => router.replace("Solicitacao")}>
          <Text style={estilos.texto1} background-color="blue">
            Cadastre-se
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },

  input: {
    width: "80%",
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    color: "white",
    backgroundColor: "#462783",
    paddingStart: 10,
    marginTop: 10,
  },

  texto: {
    color: "white",
    textAlign: "center",
  },

  texto1: {
    color: "#2395FF",
    textAlign: "center",
    marginTop: 9,
    textDecorationLine: "underline",
  },

  botao: {
    backgroundColor: "#462783",
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    width: "50%",
  },
  conteudo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
