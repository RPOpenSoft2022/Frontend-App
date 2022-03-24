import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Card,
  CardMedia,
  CardContent,
  createChainedFunction,
  Modal,
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  Avatar,
} from "@mui/material";
function Cart(props) {
  const [cart, setCart] = useContext(CartContext);
  return (
    <>
      {" "}
      <Typography
        align="center"
        color="primary"
        variant="h4"
        gutterBottom
        sx={{
          marginTop: "10px",
        }}
      >
        <ShoppingCartIcon />
        Cart
      </Typography>
      <CardElement />
    </>
  );
}

function CardElement() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0 auto",
            maxWidth: "1200px",
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Box>
        <Button
          variant="contained"
          style={{
            maxWidth: "200px",
          }}
        >
          Checkout and Pay
        </Button>
      </Box>
    </>
  );
}

function CardComponent() {
  return (
    <Card sx={{ minWidth: 300, margin: "10px" }}>
      <CardMedia
        component="img"
        height="120"
        image="https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_curry-cut.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          Lizard
        </Typography>
      </CardContent>
      <Typography color="text.secondary" align="center">
        Item Subtotal - (4)*(56$)
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button size="small">+</Button>
          <Button size="small">-</Button>
        </Box>
        <Button size="xs">Remove</Button>
      </Box>
    </Card>
  );
}
export default Cart;
