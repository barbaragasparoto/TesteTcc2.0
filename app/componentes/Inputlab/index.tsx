import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import { StyleSheet } from "react-native";

const Inputlab = () => {
  const [checked, setChecked] = React.useState("lab1");

  return (
    <View>
      <Card style={estilos.card}>
        <Card.Content>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ width: "20%", alignItems: "center" }}>
              <RadioButton
                value="lab1"
                status={checked === "lab1" ? "checked" : "unchecked"}
                onPress={() => setChecked("lab1")}
              />
              <Text>Lab 1</Text>
            </View>

            <View style={{ width: "20%", alignItems: "center" }}>
              <RadioButton
                value="lab2"
                status={checked === "lab2" ? "checked" : "unchecked"}
                onPress={() => setChecked("lab2")}
              />
              <Text>Lab 2</Text>
            </View>

            <View style={{ width: "20%", alignItems: "center" }}>
              <RadioButton
                value="lab3"
                status={checked === "lab3" ? "checked" : "unchecked"}
                onPress={() => setChecked("lab3")}
              />
              <Text>Lab 3</Text>
            </View>

            <View style={{ width: "20%", alignItems: "center" }}>
              <RadioButton
                value="lab4"
                status={checked === "lab4" ? "checked" : "unchecked"}
                onPress={() => setChecked("lab4")}
              />
              <Text>Lab 4</Text>
            </View>

            <View style={{ width: "20%", alignItems: "center" }}>
              <RadioButton
                value="lab5"
                status={checked === "lab5" ? "checked" : "unchecked"}
                onPress={() => setChecked("lab5")}
              />
              <Text>Lab 5</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const estilos = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Inputlab;
