import "./main.css";
import { useEffect } from "react";
import { useProductsContext } from "../../components/common/context/productcontext";
import Footer from "../../components/layout/footer";
import { Header } from "../../components/layout/header";
import { ProductInfo } from "./maincomponents/ProductInfo";

export function Main() {
  return (
    <>
      <Header />
      <MugCards />
      <Footer />
    </>
  );
}

export function MugCards() {
  const productcontext = useProductsContext();

  async function getMugData() {
    try {
      const data = await fetch("src/data/products.json");
      const JSONdata = await data.json();
      productcontext.setProducts(JSONdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMugData();
  }, []);
  return (
    <div className="mainContainer">
      {productcontext.products.map((product) => {
        return (
          <ProductInfo
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
