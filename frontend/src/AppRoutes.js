import React from "react";
import { Route, Routes } from "react-router-dom";
import ClarinetPage from "./pages/ClarinetPage";
import HomePage from "./pages/HomePage";
import SaxophonePage from "./pages/SaxophonePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/clarinetAccessories" element={<ClarinetPage />}></Route>
      <Route path="/saxophoneAccessories" element={<SaxophonePage />}></Route>
      <Route
        path="/clarinetAccessories/search/:searchTerm"
        element={<ClarinetPage />}
      ></Route>
      <Route
        path="/clarinetAccessories/tag/:tag"
        element={<ClarinetPage />}
      ></Route>
      <Route
        path="/saxophoneAccessories/search/:searchTerm"
        element={<SaxophonePage />}
      ></Route>
      <Route
        path="/saxophoneAccessories/tag/:tag"
        element={<SaxophonePage />}
      ></Route>
    </Routes>
  );
}
