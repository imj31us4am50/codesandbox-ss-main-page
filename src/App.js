import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "/navbar/navbar.js";
import Intro from "/intro/intro.js";
import Main from "/maincomponents/App1.js";

export default function App() {
  return (
    <div className="App m-0 p-0">
      <div className="container-with-background">
        <NavBar />
        <Intro />
      </div>
      <Main />
    </div>
  );
}
