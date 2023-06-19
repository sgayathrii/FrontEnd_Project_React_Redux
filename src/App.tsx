import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavMain from "./components/navbar/NavMain";
import ProductList from "./pages/ProductList";
import ShoppingCart from "./pages/ShoppingCart";
import FooterMain from "./components/footer/FooterMain";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/cart" element={<ShoppingCart />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
      </Routes>
      <FooterMain />
    </div>
  );
}

export default App;
