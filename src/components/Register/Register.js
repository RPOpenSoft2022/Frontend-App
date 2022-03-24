import * as React from "react";
import { useState } from "react";
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
  Link,
  InputAdornment,
} from "@mui/material";

export default function Register() {
  const [open, setOpen] = React.useState(false);
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
        <HowToRegIcon color="primary" fontSize="large" />
        <Typography align="center" color="primary" variant="h4" gutterBottom>
          Register
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
        <Link href="/" color="primary" underline="hover">
          SignUp
        </Link>
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
          <Verification />
        </>
      </Modal>
    </>
  );
}
