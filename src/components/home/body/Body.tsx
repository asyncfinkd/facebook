import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const Body: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  return (
    <>
      <div
        className="fixed"
        style={{
          backgroundColor: "#18191A",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      ></div>
      <Navbar />
    </>
  );
};
