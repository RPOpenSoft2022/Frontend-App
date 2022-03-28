import React, { useEffect } from "react";
import { Routes } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import LogIn from "./LogIn/LogIn";

const Auth = () => {
    const access = localStorage.getItem("access")
    const refresh = localStorage.getItem("refresh")
    const baseURL = process.env.REACT_APP_API_URL
    const navigate = useNavigate()
    const [authCheck, setAuthCheck] = useState(true)

    // useEffect(() => {
    //     if (access === null || access === "" || refresh === null || refresh === "") {
    //         navigate("../")
    //     }
    //     else {
    //         axios.post(baseURL + 'token/verify/',
    //             {
    //                 'token': access
    //             })
    //             .then(res => {
    //                 // if (res.ok) {
    //                 //     // navigate('./stores')
    //                 //     console.log('Hi 1')
    //                 //     setAuthCheck(true)

    //                 // }
    //                 // else {
    //                 //     console.log('Hi 2')
    //                 //     axios.post(baseURL + 'token/refresh',
    //                 //         {
    //                 //             'refresh': refresh
    //                 //         })
    //                 //         .then(res => {
    //                 //             if (res.ok) {
    //                 //                 localStorage.setItem('access', res.data["access"])
    //                 //                 setAuthCheck(true)
    //                 //                 // navigate('./stores')
    //                 //             }
    //                 //             else {
    //                 //                 navigate("../")
    //                 //             }
    //                 //         })
    //                 // }
    //                 console.log(res.data)
    //                 setAuthCheck(true)
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //                 axios.post(baseURL + 'token/refresh',
    //                 {
    //                     'refresh': refresh
    //                 })
    //                 .then(res => {
    //                     // if (res.ok) {
    //                     //     localStorage.setItem('access', res.data["access"])
    //                     //     setAuthCheck(true)
    //                     //     // navigate('./stores')
    //                     // }
    //                     // else {
    //                     //     navigate("../")
    //                     // }
    //                     localStorage.setItem('access', res.data["access"])
    //                     setAuthCheck(true)
    //                 })
    //                 .catch(err => {
    //                     console.log(err)
    //                     navigate("../")
    //                 })
    //             })
    //     }
    // }, [])

    return (
        <>
            {authCheck &&
                // <UserProvider>
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
                // </UserProvider>
        }
        </>);
}

export default Auth;