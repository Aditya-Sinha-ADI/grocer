import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
import Home from "./components/Home/home";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header/Header";
import Heading from "./components/Layout/HeadING/Heading";
import Products from "./components/Product/Product";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <Fragment>
      <CartProvider>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catagory" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Fragment>
  );
}

export default App;
