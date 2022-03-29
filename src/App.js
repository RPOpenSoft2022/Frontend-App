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
import Store from "./components/Store/Store";
import Orders from "./components/Orders/Orders";
import Order from "./components/Order/Order";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { UserProvider } from "./Contexts/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/app/*" element={<Auth />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
