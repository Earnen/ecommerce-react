import "./cart.css";
import Footer from "../../components/layout/footer";
import { Header } from "../../components/layout/header";
import { CartItems } from "./cartcomponents/CartItems";

export function Cart() {
  return (
    <>
      <Header />
      <h2 className="cartTitle">Cart</h2>
      <CartItems />
      <Footer />
    </>
  );
}
