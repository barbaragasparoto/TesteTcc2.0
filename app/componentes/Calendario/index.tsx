import React, { useState } from "react";
import DatePicker from 'react-native-modern-datepicker';
import {addDays, isWeekend, } from "date-fns"

 function Calendario() {
const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {setSelectedDate(date);}
  const minimumDate = "2024-01-31";
  const maximumDate = "2025-01-31";
  const isWeekendDay = (date) => {return isWeekend(date);}
  const filterWeekends = (date) => {return !isWeekendDay(date);}



  return (
    
       <DatePicker
       selected={selectedDate}
       onDateChange={handleDateChange}
       minimumDate={minimumDate}
       maximumDate={maximumDate}
      
       />
  
  );
}

export default Calendario;