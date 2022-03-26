import React, { Component } from "react";
import OtpInput from "react-otp-input";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import LockIcon from "@mui/icons-material/Lock";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
export default class Verification extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <>
        <Container
          style={{
            minWidth: "300px",
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LockIcon color="primary" fontSize="large" />
          <Typography
            variant="h5"
            align="center"
            style={{
              margin: "1rem",
            }}
          >
            Verification Code
          </Typography>
          <Typography
            variant="h6"
            align="center"
            style={{
              fontSize: "1rem",
              margin: "1rem",
            }}
          >
            Please Enter The Verification Code Sent To Your Mobile
          </Typography>
          <Grid
            justify="center"
            style={{
              width: "300px",
              margin: "0 auto",
            }}
          >
            <OtpInput
              value={this.state.otp}
              onChange={this.handleChange}
              numInputs={4}
              separator={<span>:</span>}
              inputStyle={{
                position: "relative",
                display: "block",
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "2rem",
                color: "black",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
              }}
              containerStyle="div"
              isInputNum
            />
          </Grid>
          <Button
            variant="contained"
            type="submit"
            style={{
              marginTop: "10px",
            }}
            onClick={() => {
              console.log(this.state.otp);
            }}
          >
            Verify
          </Button>
        </Container>
      </>
    );
  }
}
