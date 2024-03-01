import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <button className="footerBtn" onClick={() => navigate("/main")}>
        Home
      </button>

      <button className="footerBtn" onClick={() => navigate("/cart")}>
        Cart
      </button>
    </footer>
  );
}

export default Footer;
