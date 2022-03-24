import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Stores from "./components/Stores/Stores";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./Contexts/CartContext";
import "./App.css";
import Store from "./components/Store/Store";
import ResponsiveAppBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Stores" element={<Stores />} />
            <Route path="/Stores/:id" element={<Store />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
