import React from "react";
import { useHistory } from "react-router-dom";
import { Body } from "./body/Body";

export const Home: React.FC = () => {
  const history = useHistory();
  return (
    <>
      {localStorage.getItem("logged") == "true" ? (
        <>
          <Body />
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
};
