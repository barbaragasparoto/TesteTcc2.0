import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import Logo from "../componentes/Logo";
import { useRouter } from "expo-router";
import { Input } from "@rneui/themed";

export default function Login() {
  const [text] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validateFields = () => {
    const errors = { email, senha };

    if (!email) {
      errors.email = "O campo usuário é obrigatório.";
    } else {
      errors.email = "";
    }

    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!senha) {
      errors.senha = "A senha é obrigatória.";
    } else {
      errors.senha = "";
    }

    return errors;
  };

  const error = validateFields();

  return (
    <View style={estilos.container}>
      <Logo />

      <View style={estilos.conteudo}>
        <Input
          errorMessage={error.email}
          value={email}
          onChangeText={setEmail}
          style={estilos.input}
          placeholder="Email:"
          placeholderTextColor="white"
        />

        <Input
          errorMessage={error.senha}
          value={senha}
          onChangeText={setSenha}
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
