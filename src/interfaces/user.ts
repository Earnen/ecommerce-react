import { Product } from "./product";

export interface User {
  name: string;
  lastname: string;
  username: string;
  mail: string;
  password: string;
  cart: Product[];
  wishlist: [];
}
