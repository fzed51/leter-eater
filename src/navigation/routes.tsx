import React, { FC } from "react";
import { Routes as Router, Route } from "react-router-dom";
import Reader from "./pages/reader";
import Admin from "./pages/admin";

const Routes: FC = () => {
  return (
    <Router>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Reader />} />
    </Router>
  );
};

export default Routes;
