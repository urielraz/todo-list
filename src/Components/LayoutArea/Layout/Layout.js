import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import appConfig from "../../../Config/appConfig";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import NumContext from "../../../Context/NumContext/NumContext";
import NumReducer from "../../../Context/NumContext/NumReducer";
// import NumReducer from "../../../Context/NumContext/numReducer";
import ProductsContext from "../../../Context/ProductsContext";
import productsReducer from "../../../Context/ProductsReducer";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

function Layout() {
  const [products, setProducts] = useReducer(productsReducer, []);

  const [number, setNumber] = useReducer(NumReducer, 1);

  // const [auth, setAuth] = useReducer(authReducer, {});
  useEffect(() => {
    axios
      .get(appConfig.products)
      .then((response) =>
        setProducts({ type: "FETCH", payload: response.data })
      );
  }, []);

  const numPlus = () => {
    setNumber({ type: "PLUS" });
  };
  const numMinus = () => {
    setNumber({ type: "MINUS" });
  };

  return (
    // <AuthContext.Provider value={{ auth, setAuth }}>
    <ProductsContext.Provider value={{ products: products, set: setProducts }}>
      <div className="Layout">
        <NumContext.Provider value={number}>
          <Header />
          <Aside />
          <Main>
            <button onClick={numPlus}>Plus +</button>
            <button onClick={numMinus}>Minus -</button>
          </Main>
          <Footer />
        </NumContext.Provider>
      </div>
    </ProductsContext.Provider>
    // </AuthContext.Provider>
  );
}
export default Layout;
