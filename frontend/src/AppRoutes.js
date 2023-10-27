import React from "react";
import { Route, Routes } from "react-router-dom";
import ClarinetPage from "./pages/ClarinetPage";
import HomePage from "./pages/HomePage";
import SaxophonePage from "./pages/SaxophonePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/clarineteAccessories" element={<ClarinetPage />}></Route>
      <Route path="/saxophoneAccessories" element={<SaxophonePage />}></Route>
    </Routes>
  );
}
