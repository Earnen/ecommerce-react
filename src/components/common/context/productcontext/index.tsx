import {
  createContext,
  useState,
  useContext,
  FC,
  PropsWithChildren,
} from "react";
import { Product } from "../../../../interfaces/product";

export interface ProductsContextType {
  products: Product[];
  setProducts: Function;
}

const product = createContext({} as ProductsContextType);

export const ProductsContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [products, setProducts] = useState([]);
  return (
    <product.Provider value={{ products, setProducts }}>
      {children}
    </product.Provider>
  );
};

export function useProductsContext() {
  const context = useContext(product);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}
