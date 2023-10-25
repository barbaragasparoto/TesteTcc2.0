import React, { useState } from "react";
import DatePicker from 'react-native-modern-datepicker';

 function Calendario() {
  const [selectedDate, setSelectedDate] = useState("");

   const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
        <DatePicker
        selected={selectedDate}
        onDateChange={handleDateChange}/>
    </div>
  );
}

export default Calendario;