import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{label: "Selecione o laboratório"}}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Laboratório 1", value: "Lab 1" },
          { label: "Laboratório 2", value: "Lab 2" },
          { label: "Laboratório 3", value: "Lab 3" },
          { label: "Laboratório 4", value: "Lab 4" },
          { label: "Laboratório 5", value: "Lab 5" },
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
