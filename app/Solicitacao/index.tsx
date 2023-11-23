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
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirmar Senha"
            secureTextEntry={!isConfirmPasswordVisible}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={[
              styles.passwordInput,
              confirmPassword !== "" && styles.validInput,
            ]}
          />
          <TouchableOpacity
            onPress={toggleConfirmPasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={isConfirmPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <Picker 
          selectedValue={selectedCity}
          onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          style={[styles.input, selectedCity !== "" && styles.validInput]}
        >
          <Picker.Item label="Selecione o seu cargo" value="" />
          <Picker.Item label="Coordenador" value="id 1" />
          <Picker.Item label="Professor" value="id 2" />
        </Picker>
      </View>
      <TouchableOpacity onPress={(handleRegistration)} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  card: {
    borderWidth: 10,
  },
 
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 170,
    marginBottom: 10,
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
  },

  passwordInput1: {
    paddingHorizontal: 10,
  },
  passwordInput2: {
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex:1,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 10,
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