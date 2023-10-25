import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "../componentes/Card/Card";
import MyDatePicker from "../componentes/Data/index";
import Inputlab from "../componentes/Inputlab";
import DatePicker from "react-native-modern-datepicker";
import Calendario from "../componentes/Calendario";


export default function Home() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <ScrollView>
      <View style={estilos.card}>
        <Card title="" content="" />
      </View>

      <View style={estilos.cardinput}>
        <Text style={estilos.textoinput} onPress={() => router.replace("Login")}>Agende seu horario</Text>

        <Calendario/>

        <MyDatePicker />
        
        <View style={estilos.relogio}>
          <DatePicker
            style={estilos.relogioPicker}
            mode="time"
            minuteInterval={3}
            onTimeChange={(selectedTime) => setTime(selectedTime)}
          />
          <Inputlab />
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  relogioPicker: {
    borderRadius: 8,
  },
  relogio: {
    height: "auto",
    width: "100%",
  },
  card: {
    padding: 15,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    marginBottom: 100,
  },
  cardinput: {
    backgroundColor: "#462783",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 190,
    gap: 16,
  },
  textoinput: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 17,
    marginBottom: 1,
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    color: "black",
    backgroundColor: "#ffffff",
    paddingStart: 10,
    marginTop: 10,
  },
});
