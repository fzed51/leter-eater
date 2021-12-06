import React, { FC, useState, SyntheticEvent } from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "../navigation/routes";
import "./style.scss";

const App: FC = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
