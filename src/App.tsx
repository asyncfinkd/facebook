import React from "react";
import { Hero } from "./components/hero/Hero";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/home/Home";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Hero} />
        <Route path="/feed" exact component={Home} />
      </BrowserRouter>
    </>
  );
};

export default App;
