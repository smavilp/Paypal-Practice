import "./App.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaypalPayment from "./components/PaypalPayment";

function App() {
  const initialOptions = {
    clientId:
      "AXVG14_m5JKgpKaPQBPf4wkVS7itoivIqJt2SOA7YSVrJyKkSjTroErVRoMef_HnCc7T-0mkHSQGsjHQ",
    currency: "USD",
    intent: "capture"
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PaypalPayment />
    </PayPalScriptProvider>
  );
}

export default App;
