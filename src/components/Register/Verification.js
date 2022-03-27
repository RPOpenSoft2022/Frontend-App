import React from "react";
import OtpInput from "react-otp-input";
import LockIcon from "@mui/icons-material/Lock";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Avatar,
  Button,
  Grid,
  Paper,
  Container,
  Typography,
} from "@mui/material";
import { useState } from 'react'

// const theme = createTheme();
// const useStyles = makeStyles((theme) => ({
//   grid: {
//     backgroundColor: "grey",
//     height: "50vh",
//     textAlign: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   submit: {
//     margin: theme.spacing(3),
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
// }));

export default function Verification({password}) {
  // const classes = useStyles();
  const [otp, setOtp] = useState(null)
  function handleOtp(OTP){
    setOtp(OTP)
    console.log(otp)
  }

  

  return (
    <Container
      component="main"
      maxWidth="sm"
      style={{
        backgroundColor: "red",
      }}
    >
      <CssBaseline />
      <div>
        <Grid
          container
          style={{ backgroundColor: "white" }}
          justify="center"
          alignItems="center"
          spacing={3}
        >
          aayush
          <Grid item container justify="center">
            <Grid item container alignItems="center" direction="column">
              <Grid item>
                <Avatar>
                  <LockIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Verification Code
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Paper elevation={0}>
              <Typography variant="h6">
                Please enter the verification code sent to your mobile
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid item spacing={3} justify="center">
              <OtpInput
                separator={
                  <span>
                    <strong>:</strong>
                  </span>
                }
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 0.5rem",
                  fontSize: "2rem",
                  color: "black",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)",
                }}
                
                value={otp}
                onChange={handleOtp}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Verify
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
