import React from "react";
import ReactLoading from "react-loading";
import { Container } from "@mui/material";

function Loader() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ReactLoading type="spin" color="rgb(25,118,210)" width={"25%"} />{" "}
    </Container>
  );
}

export default Loader;
