import React, { useState } from "react";
import DatePicker from 'react-native-modern-datepicker';
import {addDays, isWeekend, } from "date-fns";
import { StyleSheet } from "react-native";
import { Center } from "@mantine/core";
import { CSSProperties } from "react";


 function Calendario() {
const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {setSelectedDate(date);}
  const minimumDate = "2024-01-31";
  const maximumDate = "2025-01-31";
  const isWeekendDay = (date) => {return isWeekend(date);}
  const filterWeekends = (date) => {return !isWeekendDay(date);}



  return (
    
       <DatePicker 
       options={{selectedTextColor: "#ffff", mainColor: "#462783", daysAnimationDistance:20} }
       style={estilos.data}
       selected={selectedDate}
       onDateChange={handleDateChange}
       minimumDate={minimumDate}
       maximumDate={maximumDate}
       
       />
  
  );
};

const estilos = StyleSheet.create({
  data: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: -5,

  },
});

export default Calendario;