import React, { createContext, useContext, useEffect, useState } from "react";
import { clarinet_accesories } from "../data";
const CartContext = createContext(null);
const CART_MS_KEY = "cartms";
const EMPTY_CART = { items: [], totalPrice: 0, totalCount: 0 };

export default function CartProvider({ children }) {
  const initCart = getCartFromLocalStorage();
  const [cartItems, setCartItems] = useState(initCart.items);
  const [totalPrice, setTotalPrice] = useState(initCart.totalPrice);
  const [totalCount, setTotalCount] = useState(initCart.totalCount);

  useEffect(() => {
    const totalPrice = sum(cartItems.map((item) => item.price));
    const totalCount = sum(cartItems.map((item) => item.quantity));
    setTotalPrice(totalPrice);
    setTotalCount(totalCount);
    localStorage.setItem(
      CART_MS_KEY,
      JSON.stringify({ items: cartItems, totalPrice, totalCount })
    );
  }, [cartItems]);

  function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem(CART_MS_KEY);
    return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
  }

  const sum = (items) => {
    return items.reduce((prevValue, curValue) => prevValue + curValue, 0);
  };
  const removeFromCart = (accId) => {
    // console.log(accGroup);
    console.log(accId);
    const filteredCartItems = cartItems.filter((item) => item.acc.id !== accId);
    setCartItems(filteredCartItems);
  };

  const changeQuantity = (cartItem, newQuantity) => {
    const { acc } = cartItem;
    const changedCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: acc.price * newQuantity,
    };
    setCartItems(
      cartItems.map((item) => (item.acc.id === acc.id ? changedCartItem : item))
    );
  };

  const addToCart = (acc) => {
    const cartItem = cartItems.find(
      (item) => item.acc.id === acc.id && item.acc.group === acc.group
    );
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { acc, quantity: 1, price: acc.price }]);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalPrice, totalCount },
        removeFromCart,
        changeQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
