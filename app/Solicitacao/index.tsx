import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import Logo from "../componentes/Logo";
import { useRouter } from "expo-router";
import { Input } from "@rneui/themed";
import App2 from "../componentes/SelectProfessor";

export default function Solicitacao() {
  const [text] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cargo, setCargo] = useState("");

  
  const validateFields = () => {
    const errors = { email, senha, cargo };

    if (!email) {
      errors.email = "O campo e-mail é obrigatório.";
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

    if (!cargo) {
      errors.cargo = "Cargo é um campo obrigatório.";
    } else {
      errors.cargo = "";
    }

    return errors;
  };

  const error = validateFields();

  return (
    <View style={estilos.container}>
      <Logo />


      <View style={estilos.conteudo}>

        <Input
          style={estilos.input}
          errorMessage={error.email}
          value={email}
          onChangeText={setEmail}
          placeholder="Email:"
          placeholderTextColor="black"
        />

        <Input
          style={estilos.input}
          errorMessage={error.senha}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha:"
          placeholderTextColor="black"
        />
        
        

        </View>



        <View style={estilos.cargo}>
        <App2/>
        </View>

        
      <View style={estilos.conteudo} >
      <Pressable
          style={estilos.botao}
          onPress={() => router.replace("(auth)")}
        >
          <Text style={estilos.texto}>Cadastrar</Text>
        </Pressable>
      </View>
     
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },

  input: {
    color: "black",
  },

  texto: {
    color: "white",
    textAlign: "center",
  },
cargo:{
marginTop: 20
},
  botao: {
    backgroundColor: "#462783",
    borderRadius: 20,
    padding: 10,
    marginTop: 50,
    width: "50%",
    
  },
  conteudo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
