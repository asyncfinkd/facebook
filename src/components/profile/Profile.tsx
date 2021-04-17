import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const history = useHistory();
  return (
    <>
      {localStorage.getItem("logged") != "true" ||
      !user.username ||
      !user.lastname ||
      !user.username ? (
        history.push("/")
      ) : (
        <>
          <p>hello fb</p>
        </>
      )}
    </>
  );
};
