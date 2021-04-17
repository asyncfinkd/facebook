import React from "react";
import { useHistory } from "react-router-dom";
import { WhatsYourMind } from "../whatsyourmind/WhatsYourMind";
import { Body } from "./body/Body";
import { RightSidebar } from "./right-sidebar/RightSidebar";
import { Sidebar } from "./sidebar/Sidebar";

export const Home: React.FC = () => {
  const history = useHistory();
  return (
    <>
      {localStorage.getItem("logged") == "true" ? (
        <>
          <Body />
          <div className="display:flex">
            <Sidebar />
            <WhatsYourMind />
            <RightSidebar />
          </div>
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
};
