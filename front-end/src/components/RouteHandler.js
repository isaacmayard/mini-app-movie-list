import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import EditPage from './EditPage';
const RouteHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  );
};

export default RouteHandler;
