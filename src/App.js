import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
