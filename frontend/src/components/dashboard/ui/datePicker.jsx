// components/ui/MyDatePicker.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker({ onDateSelect }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    const formatted = format(date, "yyyy-MM-dd");
    onDateSelect(formatted); // send to parent
  };

  return (
    <div className="p-2">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        placeholderText="Select a date"
        className="p-2 border card mb-4 rounded-2xl text-center cursor-pointer w-full "
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
}
