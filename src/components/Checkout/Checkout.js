import React, { useContext, useState, useEffect} from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { CartContext } from "../../Contexts/CartContext";
import {UserContext} from '../../Contexts/UserContext';

import {
  Card,
  CardMedia,
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  Container,
} from "@mui/material";
import Item from "antd/lib/list/Item";
import useRazorpay from "react-razorpay";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Checkout() {
  const [cart, setcart] = useContext(CartContext);
  const baseURL = process.env.REACT_APP_ORDER_BASE_URL;
  const userBaseURL = process.env.REACT_APP_USER_BASE_URL;
  const [paymentResponse, setpaymentResponse] = useState({});
  const Razorpay = useRazorpay();
  const [userOrderDetails, setuserOrderDetails] = useState({});
  const navigate = useNavigate();
  const access = localStorage.getItem('access');

  useEffect(()=>{
    const url = baseURL + "get-user/"
		console.log(url);
		const config = {
		headers:{
			Authorization: `Bearer ${access}` 
			}		
		}
    axios.get(`${userBaseURL}get-user`, config)
		.then(res => {
			console.log(res);
			setuserOrderDetails(res.data)
		})
		.catch((err) => window.alert(err.response.data["message"]))
  },[]);
  

  const payWithRazor = (data) => {
    let options = {
      "key": "rzp_test_VQzdw3Uw16TNCX", // Enter the Key ID generated from the Dashboard
      "amount": data.amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Checking out",
      "image": "https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-glyph.svg",
      "order_id": data.transaction_token, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": (response) => {
        setpaymentResponse(response);
        if (!response.error){
          handlePaymentStatus(data.order_id, 1);
        }
      },
      // "prefill": {
      //     "name": [user.first_name, user.middle_name, user.last_name].join(" "),
      //     "email": user.email,
      //     "contact": user.phone
      // },
      // "notes": {
      //     "address": user.address
      // },
      "theme": {
          "color": "#FF5733"
      }
    };
    let rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', (response) => {
      setpaymentResponse(response);
      // make a post request to delete the order here with data.order_id
      handlePaymentStatus(data.order_id, 4);
    });
    rzp1.open();
  }

  const handlePaymentStatus = (order_id, status) => {
    console.log(paymentResponse);
    fetch(`${baseURL}order/${order_id}/payment`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors', 
      body: JSON.stringify({...paymentResponse, "status": status}),
    }).then(() => {
      navigate(`/app/Orders/${order_id}`)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const processPayment = () => {
    console.log(cart);
    // const data = {
    //   "order_id": 2,
    //   "amount": "50000",
    //   "transaction_token": "order_JBR7tLb8md4kaw"
    // }
    // payWithRazor(data);
    let item_list = [];
    for (const item of cart.item_list){
      item_list.push({"id": item.id, "quantity" : parseInt(item.quantity)});
    }
    // item_list = JSON.stringify(item_list);
    console.log(item_list);
    const body = {"store_id": cart.store_id, "store_name": cart.store_name, "item_list": item_list, "token": localStorage.getItem('access'), "delivery_address": "RP Hall"};
    console.log(body);
    // accepted change
    // calculate amount only
    // does not create order
    axios.post(`${baseURL}order/`, body, {
      headers: { 
        Authorization: `Bearer ${access}` 
      }
    })
    .then(res => {
      console.log('Success:', res.data);
      // using razor pay for payment
      payWithRazor(res.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        align="center"
        color="primary"
        variant="h4"
        gutterBottom
        sx={{
          marginTop: "10px",
        }}
      >
        <ShoppingCartCheckoutIcon size="medium" />
        Checkout
      </Typography>
      <Typography variant="h4">From {cart.store_name}</Typography>
      <Container maxWidth="md" sx={{justifyContent: "center"}}>
        <Box >
          {cart.item_list && cart.item_list.map((item) => <CheckoutComponent {...item}/> )}
        </Box>
      </Container>
        <Button variant="contained" size="large" onClick={processPayment}> <Typography fontSize={20}>Proceed </Typography> </Button>
    </Box>
  );
}

const CheckoutComponent = (props) => {
  return (
    <Card
      elevation={5}
      sx={{
        maxWidth: "500px",
        margin: "20px auto",
      }}
    >
      <Box
        variant="contained"
        color="primary"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            backgroundColor: "yellow",
            width: "120px",
            margin: "20px",
            height: "120px",
          }}
        >
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image={props.thumbnail}
            alt="green iguana"
          />
        </Box>
        <Box
          style={{
            height: "140px",
            width: "150px",
            margin: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              align="center"
              variant="h5"
              sx={{
                color: "primary",
              }}
            >
              {props.name}
            </Typography>
            <p
              style={{
                textAlign: "center",
                margin: "0px",
              }}
            >
              Quantity = {props.quantity}
            </p>
            <p
              style={{
                textAlign: "center",
                margin: "0px",
              }}
            >
              Item Cost = {props.price}
            </p>
            <p
              style={{
                textAlign: "center",
                margin: "0px",
              }}
            >
              Total Cost = {props.price * props.quantity}
            </p>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Checkout;
