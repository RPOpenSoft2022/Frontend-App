import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
// import Stores from "./components/Stores/Stores";
// import Cart from "./components/Cart/Cart";
// import Checkout from "./components/Checkout/Checkout";
// import { CartProvider } from "./Contexts/CartContext";
// import { UserProvider } from "./Contexts/UserContext";
import "./App.css";
// import Store from "./components/Store/Store";
// import Orders from "./components/Orders/Orders";
// import Order from "./components/Order/Order"
// import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />

          {/* <UserProvider>
        <CartProvider>
          <Router>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/Stores" element={<Stores />} />
              <Route path="/Stores/:id" element={<Store />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Orders/:id" element={<Order />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route exact path="/Profile" element={<Profile />} />
            </Routes>
          </Router>
        </CartProvider>
      </UserProvider> */}
            <Route path="/app/*" element={<Auth />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
