import * as React from "react";
import { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
} from "@mui/material";

export default function LogIn() {
  const [data, setData] = useState({
    mobileNumber: "",
    password: "",
  });
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LockOpenIcon color="primary" fontSize="large" />
        <Typography align="center" color="primary" variant="h4" gutterBottom>
          SignIn
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
          }}
        >
          <FormControl
            variant="filled"
            margin="dense"
            style={{
              width: "300px",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("hii");
            }}
          >
            <TextField
              label="Number"
              margin="dense"
              placeholder="Mobile Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MobileFriendlyIcon />
                  </InputAdornment>
                ),
              }}
              required
              onChange={(e) => {
                let runMobileNumber = e.target.value;
                setData({ ...data, mobileNumber: runMobileNumber });
              }}
            />
            <TextField
              label="password"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Password"
              required
              onChange={(e) => {
                let runPassowrd = e.target.value;
                setData({ ...data, password: runPassowrd });
              }}
            />
            <Button
              variant="contained"
              type="submit"
              style={{
                marginTop: "10px",
              }}
            >
              Sign-In
            </Button>
          </FormControl>
        </form>
        <br />
        <Link href="/Register" color="primary" underline="hover">
          Register
        </Link>
        <Link href="#" color="primary" underline="hover">
          Forgot-Password
        </Link>
      </Box>
    </>
  );
}
