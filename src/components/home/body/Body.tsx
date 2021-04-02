import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Body: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  return (
    <>
      <div className="display:flex items-center justify-center h-screen flex-column">
        <p style={{ textTransform: "capitalize" }}>
          hello, ✋{" "}
          <span style={{ textTransform: "capitalize" }}>{user.username}</span>{" "}
          <span style={{ textTransform: "capitalize" }}>{user.lastname}</span>
        </p>
        <small style={{ textTransform: "capitalize" }}>
          Thanks for using facebook.
        </small>
        <button
          onClick={() => {
            localStorage.clear();
            history.push("/");
          }}
          style={{
            padding: "10px",
            marginTop: "10px",
            width: "150px",
            maxWidth: "100%",
            border: "none",
            outline: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
          }}
          type="submit"
        >
          Logout
        </button>
      </div>
    </>
  );
};
