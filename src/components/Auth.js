import React, { useEffect } from "react";
import { useContext } from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stores from "./Stores/Stores";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import { CartProvider } from "../Contexts/CartContext";
import { UserContext } from "../Contexts/UserContext";
import Store from "./Store/Store";
import Orders from "./Orders/Orders";
import Order from "./Order/Order";
import ResponsiveAppBar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD
import LogIn from "./LogIn/LogIn";
import { TryRounded } from "@mui/icons-material";
=======
import Logout from "./Logout/Logout";
>>>>>>> 06aa444311112436a2cc720068ff17eea257c51a

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
    await setUser({ ...res.data });
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

<<<<<<< HEAD
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
  return (
    <>
      {user.user_category && (
        <CartProvider>
          {user.user_category}
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
      )}
    </>
  );
};
=======
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
                            <Route exact path="/Logout" element={<Logout />} />
                        </Routes>
                    </CartProvider>
                // </UserProvider>
        }
        </>);
}
>>>>>>> 06aa444311112436a2cc720068ff17eea257c51a

export default Auth;
