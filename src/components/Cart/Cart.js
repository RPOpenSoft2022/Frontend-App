import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function Cart() {
  const [cart] = useContext(CartContext);
  return (
    <>
      {" "}
      <Typography
        align="center"
        color="primary"
        variant="h3"
        gutterBottom
        sx={{
          marginTop: "10px",
        }}
      >
        <ShoppingCartIcon />
        Cart
      </Typography>
      {
        !cart.item_list || !cart.item_list.length? 
        (<Typography variant="h5" sx={{ textAlign: "center" }}>
            No Food Items are picked
          </Typography>):
        (
          <Box>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
            Picked From {cart.store_name}
            </Typography>
            <CardElement />
          </Box>
        )
      }
    </>
  );
}

function CardElement() {
  const [cart] = useContext(CartContext);
  const { item_list } = cart;
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
          {item_list &&
            item_list.map((Item) => {
              const { id } = Item;
              return (
                <>
                  <CardComponent key={id} {...Item} />
                </>
              );
            })}
        </Box>
        <Button
          variant="contained"
          style={{
            maxWidth: "200px",
          }}
          component={Link}
          to="/app/Checkout"
        >
          Checkout and Pay
        </Button>
      </Box>
    </>
  );
}

function CardComponent(props) {
  const [cart, setCart] = useContext(CartContext);
  const updateItemQuantity = (itemId, operation) => {
    const { item_list} = cart;
    const modifiedItems = item_list.map((item) => {
      if (item.id === itemId) {
        const quantity = Number(item.quantity) + operation;
        const modifiedItem = { ...item, quantity: `${quantity}` };
        return modifiedItem;
      } else return item;
    }).filter((item) => item.quantity !== "0");
    setCart({ ...cart, item_list: modifiedItems });
  };
  const removeItem = (itemId) => {
    const { item_list } = cart;
    const modifiedItems = item_list.filter((item) => item.id !== itemId);
    setCart({ ...cart, item_list: modifiedItems });
  };
  const { id, name, quantity, price } = props;
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
          {name}
        </Typography>
      </CardContent>
      <Typography color="text.secondary" align="center">
        Item Subtotal - ({quantity})*(INR {price})
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            size="small"
            onClick={() => {
              updateItemQuantity(id, 1);
            }}
          >
            +
          </Button>
          <Button
            size="small"
            onClick={() => {
              updateItemQuantity(id, -1);
            }}
          >
            -
          </Button>
        </Box>
        <Button
          size="xs"
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
}
export default Cart;
