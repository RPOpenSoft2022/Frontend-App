import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import {
  Modal,
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
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
    </Box>
  );
}

export default Checkout;
