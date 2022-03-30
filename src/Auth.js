import React, { useEffect } from "react";
import { useContext } from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stores from "./components/Stores/Stores";
import Cart from "./components/Cart/Cart";
import Checkout from ".//components/Checkout/Checkout";
import { CartProvider } from "./Contexts/CartContext";
import { UserContext } from "./Contexts/UserContext";
import Store from "./components/Store/Store";
import Orders from "./components/Orders/Orders";
import Order from "./components/Order/Order";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Logout/Logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeliveryNavBar from "./deliveryComponents/Navbar/Navbar";
import Deliveries from "./deliveryComponents/Deliveries/Deliveries";
import Delivery from "./deliveryComponents/Delivery/Delivery";

const Auth = () => {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  const baseURL = process.env.REACT_APP_USER_BASE_URL;
  const navigate = useNavigate();
  const [authCheck, setAuthCheck] = useState(false);

  if (access === null || access === "" || refresh === null || refresh === "") {
    navigate("../");
  }
  const [user, setUser] = useContext(UserContext);
  const UserDetails = async (accessToken) => {
    const res = await axios.get(baseURL + "get-user/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const userData = res.data;
    console.log('here');
    console.log(userData);
    if(userData['user_category'] == 'Staff'){
      const body = {
        user_id: userData['id']
      };
      const storeURL = process.env.REACT_APP_STORE_BASE_URL;
      const res = await axios.post(storeURL + "store_manager/", body);
      console.log(res.data);
      await setUser({...userData, storeData: res.data});
      console.log(user);
    }else{
      await setUser({ ...userData});
    }
  };

  const AuthCheck = async () => {
    try {
      const res = await axios.post(baseURL + "token/verify/", {
        token: access,
      });
      console.log(res.data);
      await UserDetails(access);
      console.log(user);
    } catch (err) {
      console.log(err);
      try {
        const res = axios.post(baseURL + "token/refresh/", {
          refresh: refresh,
        });
        localStorage.setItem("access", res.data["access"]);
        await UserDetails(localStorage.getItem("access"));
      } catch (err) {
        console.log(err);
        navigate("../");
      }
    }
  };

  const userView = (userCategory) => {
    switch (userCategory) {
      case "Delivery":
        return (
          <>
            <DeliveryNavBar />
            <Routes>
              <Route path="/Deliveries" element={<Deliveries />} />
              <Route path="/Deliveries/:id" element={<Delivery />} />
              <Route exact path="/Logout" element={<Logout />} />
            </Routes>
          </>
        );
      default:
        return (
          <>
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
                <Route exact path="/Logout" element={<Logout />} />
              </Routes>
            </CartProvider>
          </>
        );
    }
  };

  // useEffect(() => {
  //   if (
  //     access === null ||
  //     access === "" ||
  //     refresh === null ||
  //     refresh === ""
  //   ) {
  //     navigate("../");
  //   } else {
  //     axios
  //       .post(baseURL + "token/verify/", {
  //         token: access,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         setAuthCheck(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         axios
  //           .post(baseURL + "token/refresh/", {
  //             refresh: refresh,
  //           })
  //           .then((res) => {
  //             localStorage.setItem("access", res.data["access"]);
  //             setAuthCheck(true);
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             navigate("../");
  //           });
  //       });
  //   }
  // });

  // const [user, setUser] = useContext(UserContext);
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("access");
  //   axios
  //     .get(baseURL + "get-user/", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     })
  //     .then((res) => {
  //       setUser({ ...res.data });
  //     });
  // }, []);
  // console.log(user);
  console.log(user.user_category);
  if (!user.user_category) AuthCheck();
  else {
    console.log(user);
  }
  return <>{user.user_category && userView(user.user_category)}</>;
};

export default Auth;
