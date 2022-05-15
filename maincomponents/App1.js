import "./styles1.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "/maincomponents/Title.js";
import FlexIntroComponents from "/maincomponents/flexintrocomponents.js";
import MoreInfo from "/maincomponents/moreinfo.js";
import AnyQuestions from "/maincomponents/anyquestions.js";

export default function App1() {
  return (
    <div className="App1 m-0 p-0">
      <Title />
      <FlexIntroComponents />
      <MoreInfo />
      <AnyQuestions />
    </div>
  );
}
