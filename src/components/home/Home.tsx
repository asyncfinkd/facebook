import React from "react";
import { useHistory } from "react-router-dom";
import { Body } from "./body/Body";
import { Sidebar } from "./sidebar/Sidebar";

export const Home: React.FC = () => {
  const history = useHistory();
  return (
    <>
      {localStorage.getItem("logged") == "true" ? (
        <>
          <Body />
          <Sidebar />
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
};
