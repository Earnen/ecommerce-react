import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
};

export function ProductInfo(props: Props) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/${props.id}`}
      key={props.id}
    >
      <div className="productDiv">
        <img className="productImg" src={props.img} alt={props.name} />
        <p className="productDescription">{props.description}(</p>
        <p className="productDescription price">{props.price} €</p>
      </div>
    </Link>
  );
}
