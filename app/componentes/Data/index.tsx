import React, { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import {  StyleSheet } from "react-native";

export default function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <DatePicker style={estilos.calendario}
    
      onSelectedChange={date => setSelectedDate(date)}
      current="2023-10-16"
      minimumDate="2023-10-16"
      maximumDate="2050-10-16"
      selected="2023-10-16"
      mode="calendar"
      minuteInterval={30}
      
    />
  );
}

const estilos = StyleSheet.create({
    calendario: {
        borderRadius: 10
        
    },
})