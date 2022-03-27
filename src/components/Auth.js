import React from "react";
import { Routes, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stores from "./Stores/Stores";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import { CartProvider } from "../Contexts/CartContext";
import { UserProvider } from "../Contexts/UserContext"
import Store from "./Store/Store";
import Orders from "./Orders/Orders";
import Order from "./Order/Order"
import ResponsiveAppBar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import axios from 'axios'

const Auth = () => {
    const access = localStorage.getItem("access")
    const refresh = localStorage.getItem("refresh")
    const baseURL = process.env.REACT_APP_API_URL
    const history = useHistory()
    if(access === null || access === "" || refresh === null || refresh === ""){
        history.push("../login")
    }
    else{
        axios.post(baseURL + 'token/verify/', 
        {
            'token': access
        })
        .then(res => {
            if(res.ok){
                history.push('./stores')
            }
            else{
                axios.post(baseURL + 'token/refresh', 
                {
                    'refresh': refresh
                })
                .then(res => {
                    if(res.ok){
                        localStorage.setItem('access', res.data["access"])
                    }
                    else{
                        history.push("../login")
                    }
                })
            }
        })
    }
    return ( 
    <>
        <UserProvider>
            <CartProvider>
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
            </CartProvider>
        </UserProvider>
    
    </> );
}
 
export default Auth;