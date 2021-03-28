import React from "react";

interface Props {
  monthValue?: any;
  monthHandle?: any;
}

export const Month: React.FC<Props> = ({ monthValue, monthHandle }) => {
  return (
    <>
      <select
        aria-label="Month"
        value={monthValue}
        style={{
          borderRadius: "4px",
          color: "#1c1e21",
          fontSize: "15px",
          border: "1px solid #ccd0d5",
          outline: "none",
          height: "36px",
          fontWeight: "normal",
          lineHeight: "20px",
          padding: "0 8px",
          width: "123px",
          backgroundColor: "transparent",
          marginTop: "2px",
        }}
        className="ml-3"
        onChange={monthHandle}
        name="birthday_month"
        id="month"
        title="Month"
      >
        <option value="0">Month</option>
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
    </>
  );
};
