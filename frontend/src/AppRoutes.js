import React from "react";
import { Route, Routes } from "react-router-dom";
import AccessoryPage from "./pages/Accesory/AccessoryPage";
import CartPage from "./pages/Cart/CartPage";
import ClarinetPage from "./pages/Clarinet/ClarinetPage";
import HomePage from "./pages/Home/HomePage";
import SaxophonePage from "./pages/Saxophone/SaxophonePage";

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
        path="/clarinetAccessories/:id"
        element={<AccessoryPage folder={"clarinet"} />}
      ></Route>
      <Route
        path="/saxophoneAccessories/search/:searchTerm"
        element={<SaxophonePage />}
      ></Route>
      <Route
        path="/saxophoneAccessories/tag/:tag"
        element={<SaxophonePage />}
      ></Route>
      <Route
        path="/saxophoneAccessories/:id"
        element={<AccessoryPage folder={"saxophone"} />}
      ></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
  );
}
