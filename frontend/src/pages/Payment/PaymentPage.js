import React, { useState, useEffect } from "react";
import classes from "./paymentPage.module.css";
import { getNewOrderForCurrentUser, pay } from "../../services/orderService";
import Title from "../../components/Title/Title";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";

export default function PaymentPage() {
  const { clearCart } = useCart();
  const [order, setOrder] = useState();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // addToCart(acc);
    navigate("/cart");
  };

  const handleContinue = async () => {
    // try {
    const orderId = await pay();
    clearCart();
    toast.success("ORDER TOTALLY CONFIRMED", "Success");
    navigate("/track/" + orderId.id);
    // } catch (error) {
    // toast.error("CHANGE to confirm failed", "Error");
    // }
  };
  useEffect(() => {
    getNewOrderForCurrentUser().then((data) => setOrder(data));
  }, []);

  if (!order) return;
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title title="Order Form" fontSize="1.6rem" />
          <div className={classes.summary}>
            <div>
              <p> Customer information:</p>
            </div>
            <div>
              <h3>Name:</h3>
              <span>{order.name}</span>
            </div>
            <div>
              <h3>Address:</h3>
              <span>{order.address}</span>
            </div>
            <div>
              <h3>Phone:</h3>
              <span>{order.phone}</span>
            </div>
            <div>
              <h3>email:</h3>
              <span>{order.email}</span>
            </div>
            <div>
              <p> List of items:</p>
            </div>
          </div>
          <OrderItemsList order={JSON.parse(order.ord)} />
          <div>
            <p>
              Thanks! Your order is already taken if you want to change it you
              can go to cart
            </p>
            <p>
              You can also continue shopping and create a new order we will
              contact you very soon!
            </p>
          </div>
        </div>
      </div>
      {/* <OrderItemsList order={JSON.parse(order.ord)} /> */}
      {/* {console.log("paymentpage:")} */}
      {/* {console.log(order.ord)} */}

      <div className={classes.buttons_container}>
        <div className={classes.buttons}>
          <Button
            // type="submit"
            onClick={handleAddToCart}
            text="GO TO CART"
            width="100%"
            height="3rem"
          />

          <Button
            // type="submit"
            onClick={handleContinue}
            text="CONTINUE SHOPPING/CREATE A NEW ORDER"
            width="100%"
            height="3rem"
          />
        </div>
      </div>
      {/* <div>
        <pre>{JSON.stringify(order.ord, null, 2)}</pre>
      </div> */}
    </>
  );
}
