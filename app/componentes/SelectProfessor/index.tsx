import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export default function App2() {
  const [cargo, setCargo] = useState("");
  const [error, setError] = useState("");

  const validateCargo = () => {
    if (!cargo) {
      setError("Cargo é um campo obrigatório.");
    } else {  
      setError("");
    }
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{ label: "Selecione seu cargo" }}
        onValueChange={(value) => {
          setCargo(value);
          validateCargo();
        }}
        items={[
          { label: "Coordenador", value: "id 1" },
          { label: "Professor", value: "id 2" },
        ]}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: -5,
  },
  errorMessage: {
    color: "red",
    marginTop: 5,
  },
});
