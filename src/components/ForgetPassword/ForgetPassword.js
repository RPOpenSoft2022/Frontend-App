import * as React from "react";
import { useState, useEffect} from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Verification from "./Verification";
import {
  Modal,
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import {Link} from 'react-router-dom';

export default function Register() {
  const [LoggedIn, setLoggedIn] = useState(false); 
  const [open, setOpen] = React.useState(true);
  const [data, setData] = useState({
    mobileNumber: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if(LoggedIn){
      navigate('/app/Stores');
    }
    if(localStorage.getItem("access")){
      setLoggedIn(true);
   }else{
     setLoggedIn(false);
   }
  }, [LoggedIn]);

  const baseURL = process.env.REACT_APP_USER_BASE_URL;

  const sendOTP = () => {
    if (data.mobileNumber !== "") {
      console.log('send')
      axios.post(baseURL + 'send-otp/',
        {
          'phone': data.mobileNumber,
          'password': data.password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(res => {
          console.log(res.data)
          setOpen(true)
        })
        .catch(err => {
          console.log(err.response.data["message"])
          window.alert(err.response.data["message"])
        })
    }
  }
  
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
        <HowToRegIcon color="primary" fontSize="large" />
        <Typography align="center" color="primary" variant="h4" gutterBottom>
          Reset Password
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendOTP();
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
              onChange={(e) => {
                let runMobileNumber = e.target.value;
                setData({ ...data, mobileNumber: runMobileNumber });
              }}
              value={data.mobileNumber}
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
              type="password"
              placeholder="Password"
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
              onClick={() => {
                setOpen(true);
              }}
            >
              Verify Number
            </Button>
          </FormControl>
        </form>
        <Button component={Link} to="/" sx={{marginTop:"5px"}}>
        Sign in
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Verification password={data.password} phone={data.mobileNumber}/>
        </>
      </Modal>
    </>
  );
}
