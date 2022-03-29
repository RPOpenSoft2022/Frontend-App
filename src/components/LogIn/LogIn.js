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
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [data, setData] = useState({
    mobileNumber: "",
    password: "",
  });

  const baseURL = process.env.REACT_APP_USER_BASE_URL;
  const navigate = useNavigate();
  const login = () => {
    if (data.mobileNumber !== "" && data.password !== "") {
      axios
        .post(
          baseURL + "login/",
          {
            phone: data.mobileNumber,
            password: data.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("access", res.data["access"]);
          localStorage.setItem("refresh", res.data["refresh"]);
          navigate("./app/stores");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
          Sign in
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
            login();
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
              label="Password"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
              type="password"
              placeholder="Password"
              required
              error={data.password.length < 8}
              helperText={
                data.password.length < 8 ? "At least 8 characters" : ""
              }
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
        <Button component={Link} to="/Register">
          Register
        </Button>
        <Button component={Link} to="/Register">
          Forgot-Password
        </Button>
      </Box>
    </>
  );
}
