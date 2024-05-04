/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker } from "antd";
import { Dayjs } from "dayjs"; // Import dayjs
import React, { useState } from "react";

const { RangePicker } = DatePicker;

const Date: React.FC = () => {
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);

  const handleDateChange = (
    dates: [Dayjs | null, Dayjs | null],
    dateStrings: [string, string]
  ) => {
    setDates(dates); // Update dates state when date range changes
    console.log("Check-in value:", dateStrings[0]); // Log check-in value
    console.log("Check-out value:", dateStrings[1]); // Log check-out value
  };

  return (
    <div>
      <RangePicker value={dates} onChange={handleDateChange as any} />{" "}
      {/* Pass value and onChange props */}
    </div>
  );
};

export default Date;
