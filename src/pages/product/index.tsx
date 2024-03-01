import "./product.css";
import { useParams } from "react-router-dom";
import Footer from "../../components/layout/footer";
import { Header } from "../../components/layout/header";
import { useState } from "react";
import { useUsersContext } from "../../components/common/context/usercontext";
import { useProductsContext } from "../../components/common/context/productcontext";

export function Product() {
  return (
    <>
      <Header />
      <div className="productCardContainer">
        <ProductDescription />
      </div>
      <Footer />
    </>
  );
}

export function ProductDescription() {
  const { productId } = useParams();
  const productcontext = useProductsContext();
  const [count, setCount] = useState(1);
  const showProduct = productcontext.products.find((element) => {
    return element.id.toString() === productId;
  });

  const usercontext = useUsersContext().user;
  const addItemToUserArray = () => {
    for (let i = 0; i < count; i++) {
      if (showProduct && usercontext) {
        usercontext.cart.push(showProduct);
      }
    }
  };

  return (
    <>
      <div className="productDiv">
        <img
          className="productImg"
          src={showProduct?.img}
          alt={showProduct?.name}
        />
        <h3 className="productDescription">{showProduct?.name}</h3>
        <p className="productDescription">{showProduct?.description}</p>
        <p className="productDescription price">{showProduct?.price} €</p>
      </div>
      <button
        className="addremoveBtn"
        onClick={() => {
          if (count > 1) setCount((prevState) => prevState - 1);
        }}
      >
        -
      </button>
      <p className="quantity">{count}</p>
      <button
        className="addremoveBtn"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        +
      </button>
      <button
        className="addBtn"
        onClick={() => {
          addItemToUserArray();
        }}
      >
        Add to cart
      </button>
    </>
  );
}
