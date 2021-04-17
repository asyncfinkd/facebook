import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ProfileHero } from "./ProfileHero";

export const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const history = useHistory();
  return (
    <>
      {localStorage.getItem("logged") != "true" ||
      !user.username ||
      typeof user.username != "string" ||
      !user.lastname ||
      typeof user.lastname != "string" ||
      typeof user.email != "string" ? (
        history.push("/")
      ) : (
        <>
          <ProfileHero />
        </>
      )}
    </>
  );
};
