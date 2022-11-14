import { useContext } from "react";
import { NavLink } from "react-router-dom";
import NumContext from "../../../Context/NumContext/NumContext";
import "./Aside.css";

function Aside() {
  const num = useContext(NumContext);
  return (
    <aside className="Aside">
      {num}
      <nav>
        <NavLink to="/home">Home</NavLink>
        <br />
        <NavLink to="/todo">Todo List</NavLink>
        <br />
        <NavLink to="/users">Users</NavLink>
        <br />
        <NavLink to="/posts">Posts</NavLink>
        <br />
        <NavLink to="/products">Products</NavLink>
      </nav>
    </aside>
  );
}

export default Aside;
