import React from "react";
import { Hero } from "./components/hero/Hero";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Profile } from "./components/profile/Profile";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Hero} />
        <Route path="/feed" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </BrowserRouter>
    </>
  );
};

export default App;
