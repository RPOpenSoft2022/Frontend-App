import React, { useContext, useState} from "react";
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

function Checkout() {
  const [cart, setcart] = useContext(CartContext);
  const [user, setuser] = useContext(UserContext);
  const baseURL = process.env.REACT_APP_ORDER_BASE_URL;
  const [paymentResponse, setpaymentResponse] = useState({});
  const Razorpay = useRazorpay();

  const payWithRazor = (data) => {
    let options = {
      "key": "rzp_test_VQzdw3Uw16TNCX", // Enter the Key ID generated from the Dashboard
      "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Checking out",
      "image": "https://example.com/your_logo",
      "order_id": data.transaction_token, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": (response) => {
        setpaymentResponse(response);
        if (!response.error)
          handleSuccessfullPayment(data.order_id);
      },
      "prefill": {
          "name": [user.first_name, user.middle_name, user.last_name].join(" "),
          "email": user.email,
          "contact": user.phone
      },
      "notes": {
          "address": user.address
      },
      "theme": {
          "color": "#FF5733"
      }
    };
    let rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', (response) => {
      setpaymentResponse(response);
      // make a post request to delete the order here with data.order_id
      handleFailedPayment(data.order_id);
    });
    rzp1.open();
  }

  const handleFailedPayment = (order_id) => {
    fetch(`${baseURL}/orders/payment_failed`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors', 
      body: JSON.stringify({...paymentResponse, order_id: order_id}),
    })
  }

  const handleSuccessfullPayment = (order_id) => {
    fetch(`${baseURL}/orders/payment_success`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors', 
      body: JSON.stringify({...paymentResponse, order_id: order_id}),
    })
  }

  const processPayment = () => {
    console.log(cart);
    // const data = {
    //   "order_id": 2,
    //   "amount": "50000",
    //   "transaction_token": "order_JBR7tLb8md4kaw"
    // }
    // payWithRazor(data);
    fetch(`${baseURL}order/`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors', 
      body: JSON.stringify({...cart, token: localStorage.getItem('access'), customer: 6}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // using razor pay for payment
      payWithRazor(data);
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
