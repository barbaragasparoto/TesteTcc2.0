import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export default function App2() {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{label: "Selecione o laboratório"}}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Coordenador", value: "id 1" },
          { label: "Professor", value: "id 2" },
        
        ]}
      />
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
});
