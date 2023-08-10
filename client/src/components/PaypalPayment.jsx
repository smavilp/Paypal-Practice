import React from "react";
import ReactDOM from "react-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalPayment = () => {
  const urlServer = "http://localhost:8000";
  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch(`${urlServer}/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        product: {
          description: "Wood Candy Sofa",
          cost: "399.00"
        }
      })
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = (data) => {
    // Order is captured on the server
    return fetch(`${urlServer}/my-server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    }).then((response) => response.json());
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PaypalPayment;