import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Ionicons style={styles.icone} name="person-circle-outline" />
      <View style={styles.text}>
        <Text style={styles.title}>{title}ROGÉRIO FURLAN </Text>
        <Text style={styles.permissao}>{content}Coordenador </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#462783",
    borderRadius: 8,
    padding: 16,
    margin: 0,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15

  },

  text: {
    flexDirection: "column",
  },

  icone: {
    color: "#FFCC00",
    fontSize: 100,
    marginRight: 16,
    textAlign: "left",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    color: "#ffffff",
    marginTop: 40
  },
  permissao: {
    fontSize: 15,
    color: "#FFCC00",
    textAlign: "center",
    marginEnd: 60,
    marginBottom: 40
  },
});

export default Card;
