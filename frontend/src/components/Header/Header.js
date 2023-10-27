import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const user = {
    name: "Jhon",
  };
  const cart = {
    totalCount: 10,
  };

  const logout = () => {};
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          MUSIC STORE
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="">Quienes Somos</Link>
            </li>

            <li>
              <Link to="/clarineteAccessories">Clarinet Accesories</Link>
            </li>

            <li>
              <Link to="/saxophoneAccessories">Saxophone Accesories</Link>
            </li>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
