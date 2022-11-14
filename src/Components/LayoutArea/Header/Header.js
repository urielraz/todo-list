import "./Header.css";
import logo from "../../../Assets/Images/tasks.png";
import { useContext } from "react";
import ProductsContext from "../../../Context/ProductsContext";
import { NavLink } from "react-router-dom";
import NumContext from "../../../Context/NumContext/NumContext";

function Header() {
  const { products } = useContext(ProductsContext);

  const num = useContext(NumContext);

  const rating = products.reduce(
    (max, product) => (product.rating > max.rating ? product : max),
    products[0]
  );

  return (
    <header className="Header">
      <h1>TODO List -{num}</h1>
      <div>
        Rating: {rating?.title}({rating?.rating})
        <img src={logo} alt="logo" />
        <span> </span>
        <NavLink to="/register">Register</NavLink>
        <span>/</span>
        <NavLink to="/login">Login</NavLink>
      </div>
    </header>
  );
}

export default Header;
