import { useEffect, useState } from "react";
import { useUsersContext } from "../../../components/common/context/usercontext";
import { CartItem } from "./CartItem";

type ProductCount = {
  [productId: number]: number;
};

export function CartItems() {
  const userCart = useUsersContext().user.cart;
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let price: number = 0;
    userCart.map((item) => {
      price += item.price;
    });
    setTotalPrice(price);
  };

  const productCount: ProductCount = {};
  userCart.map((item) => {
    const productId: number = item.id;
    productCount[productId] = productCount[productId]
      ? productCount[productId] + 1
      : 1;
  });

  useEffect(() => {
    calculateTotalPrice();
  }, [userCart]);

  return (
    <div className="cartContainer">
      {userCart.length === 0 && (
        <h3 className="cartEmpty">The cart is empty!</h3>
      )}
      {Object.entries(productCount).map(([productId, count]) => {
        return (
          <div key={productId}>
            <CartItem
              renderPrice={calculateTotalPrice}
              product={userCart.find((item) => String(item.id) === productId)}
              count={count}
            />
          </div>
        );
      })}
      {userCart.length > 0 && (
        <div className="totalPrice">
          <strong>Total: {totalPrice} €</strong>
          <button className="checkoutBtn">Checkout</button>
        </div>
      )}
    </div>
  );
}
