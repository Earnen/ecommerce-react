import { useState } from "react";
import { useUsersContext } from "../../../components/common/context/usercontext";
import { Product } from "../../../interfaces/product";

type Props = {
  product: Product | undefined;
  count: number;
  renderPrice: Function;
};

export function CartItem({ product, count, renderPrice }: Props) {
  const [counter, setCounter] = useState(count);
  const loggedUserCart = useUsersContext().user.cart;

  const addToUserCart = () => {
    setCounter((prevState) => prevState + 1);
    if (loggedUserCart && product) {
      loggedUserCart.push(product);
    }
    renderPrice();
  };

  const removeFromUserCart = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
    if (loggedUserCart && product) {
      const index = loggedUserCart.findIndex((element) => {
        return element.id === product.id;
      });
      loggedUserCart.splice(index, 1);
    }
    renderPrice();
  };

  const handleDelete = () => {
    for (let i = 0; i < counter; i++) {
      removeFromUserCart();
    }
  };

  return (
    <>
      {counter > 0 && (
        <div className="cardItem" key={product?.id}>
          <img className="cartImg" src={product?.img} alt={product?.name} />
          <div className="itemInfo">
            <h4>{product?.name}</h4>
            <p>{product?.price} €</p>
            <div className="btns">
              <button className="addremoveBtn" onClick={removeFromUserCart}>
                -
              </button>
              <p className="quantity">{counter}</p>
              <button className="addremoveBtn" onClick={addToUserCart}>
                +
              </button>

              <button className="removeBtn" onClick={handleDelete}>
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
