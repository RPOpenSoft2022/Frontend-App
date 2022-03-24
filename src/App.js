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
<<<<<<< HEAD
import Store from "./components/Store/Store";
=======
import Store from "./components/Store/Store"
import Orders from "./components/Orders/Orders"
>>>>>>> 177e815203cb03f5234e8ecd01aa6caad97194cf
import ResponsiveAppBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <CartProvider>
      <Router>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Stores" element={<Stores />} />
          <Route path="/Stores/:id" element={<Store />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Router>
>>>>>>> 177e815203cb03f5234e8ecd01aa6caad97194cf
      </CartProvider>
    </div>
  );
}

export default App;
