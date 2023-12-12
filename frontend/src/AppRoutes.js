import React from "react";
import { Route, Routes } from "react-router-dom";
import AccessoryPage from "./pages/Accesory/AccessoryPage";
import CartPage from "./pages/Cart/CartPage";
import ClarinetPage from "./pages/Clarinet/ClarinetPage";
import Dbtest from "./pages/dbtest/DbtestPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import SaxophonePage from "./pages/Saxophone/SaxophonePage";
import RegisterPage from "./pages/Register/RegisterPage";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import PaymentPage from "./pages/Payment/PaymentPage";
import OrderTrackPage from "./pages/OrderTrack/OrderTrackPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import OrdersPage from "./pages/Orders/OrdersPage";

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
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route
        path="/checkout"
        element={
          <AuthRoute>
            <CheckoutPage />
          </AuthRoute>
        }
      ></Route>
      <Route
        path="/payment"
        element={
          <AuthRoute>
            <PaymentPage />
          </AuthRoute>
        }
      ></Route>
      <Route
        path="/track/:orderId"
        element={
          <AuthRoute>
            <OrderTrackPage />
          </AuthRoute>
        }
      ></Route>

      <Route
        path="/profile"
        element={
          <AuthRoute>
            <ProfilePage />
          </AuthRoute>
        }
      ></Route>

      <Route
        path="/orders/:filter?"
        element={
          <AuthRoute>
            <OrdersPage />
          </AuthRoute>
        }
      ></Route>
      {/* <Route path="/payment" element={<PaymentPage />}></Route> */}
      <Route path="/dbtest" element={<Dbtest />}></Route>
    </Routes>
  );
}
