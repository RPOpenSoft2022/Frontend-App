import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
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
function Checkout() {
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
      <Container maxWidth="md">
        <Box>
          <CheckoutComponent />
          <CheckoutComponent />
          <CheckoutComponent />
          <CheckoutComponent />
        </Box>
      </Container>
    </Box>
  );
}

const CheckoutComponent = () => {
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
            image="https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_curry-cut.jpg"
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
              Item Name
            </Typography>
            <p
              style={{
                textAlign: "center",
                margin: "0px",
              }}
            >
              Quantity = Quantity
            </p>
            <p
              style={{
                textAlign: "center",
                margin: "0px",
              }}
            >
              Cost = Cost
            </p>
            <p
              style={{
                textAlign: "center",
                margin: "0px",
              }}
            >
              Total-Cost = Cost
            </p>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Checkout;
