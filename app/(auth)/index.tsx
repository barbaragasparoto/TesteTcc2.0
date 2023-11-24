import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import Logo from "../componentes/Logo";

const Header = () => (
  <Logo />
);

function UserRegistration() { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleRegistration = () => {
    if (
      name === "" ||
      password === "" ||
      confirmPassword === "" ||
      selectedCity === ""
    ) {
      Alert.alert("Aviso", "Todos os campos são obrigatórios!");
      return;
    }
    // aqui ele ve se a senha tem 6 caracteres
    if (password.length < 6) {
      Alert.alert("Aviso", "A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    // aqui ele ve se o confirmar senha esta igual a senha
    if (password !== confirmPassword) {
      Alert.alert("Aviso", "As senhas não coincidem!");
      return;
    }
    console.log("Cidade selecionada:", selectedCity);

    setName("");
    setSelectedCity("");
    setPassword("");
    setConfirmPassword("");

    Alert.alert("Sucesso", "Os dados foram salvos com sucesso!");

    router.replace("(auth)");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View >
       
        <TextInput
          placeholder="Nome de usuário"
          value={name}
          onChangeText={(text) => setName(text)}
          style={[styles.input, styles.passwordInput1, name !== "" && styles.validInput]}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={[styles.passwordInput, password !== "" && styles.validInput]}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        
        
      </View>
      <TouchableOpacity style={styles.botao}
          onPress={() => router.replace("(tabs)")}
        >
          <Text style={styles.texto}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("Solicitacao")}>
          <Text style={styles.texto1} background-color="blue">
            Cadastre-se
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({


  texto1: {
    color: "#2395FF",
    textAlign: "center",
    marginTop: 9,
    textDecorationLine: "underline",
  },

  texto: {
    color: "white",
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#462783",
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    width: "50%",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  card: {
    borderWidth: 10,
    backgroundColor: "white"
  },
 
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",

  },
  validInput: {
    borderColor: "green",
    
  },
  passwordContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    width: "80%",


  },

  passwordInput1: {
    paddingHorizontal: 10,
  },
  passwordInput2: {
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex:1,
    backgroundColor: "white",
    height: 40,
    borderWidth: 0,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 0,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
marginTop: 10,
marginRight: 10  
},
  button: {
    backgroundColor: "#462783",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    width: "50%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default UserRegistration;