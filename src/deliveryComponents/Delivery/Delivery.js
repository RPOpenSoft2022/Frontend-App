import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Delivery.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Table, Select, Input, Button } from "antd";
import Box from "@mui/material/Box";
import "antd/dist/antd.css";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";
import Verification from "../Delivery/Verification";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { Modal, TextField, InputAdornment } from "@mui/material";

const Delivery = () => {
  const { id } = useParams();
  // const [open, setOpen] = useState(false);
  // const [data, setData] = useState({
  //   loading: false,
  //   cost: "300",
  //   delivery_otp: "8376",
  //   delivery_status: "Picked",
  //   delivery_address: "Some address to drop at",
  //   store_id: 12,
  //   store_name: "Carlos",
  //   order_time: "11:00 AM",
  // });
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ loading: true });
  const baseURL = process.env.REACT_APP_DELIVERY_BASE_URL;
  const access = localStorage.getItem("access");

  const navigate = useNavigate();
  const PickUpOrder = (orderId) => {
    const baseURL = process.env.REACT_APP_DELIVERY_BASE_URL;
    axios
      .post(baseURL + "ready_to_pick/", {
        order_id: orderId,
      })
      .then((res) => {
        alert(res.data["message"]);
        navigate("../Deliveries");
      });
  };

  useEffect(() => {
    let data = {};
    axios
      .get(baseURL + `delivery/${id}`, {
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        let date = new Date(res.data.creation_time);
        data = { ...res.data };
        data = {
          ...data,
          date: date.toDateString(),
          time: date.toLocaleTimeString(),
        };
        let updatedData = {
          data: data,
          loading: false,
        };
        setData(updatedData);
      });
  }, []);

  return (
    <>
      {data.loading ? (
        <Loader />
      ) : (
        <Box className="delivery_container">
          <h1 className="delivery_header">
            <SummarizeIcon
              color="primary"
              style={{ fontSize: "35px", marginBottom: "-5px" }}
            />{" "}
            Delivery Summary
          </h1>
          <Box className="delivery_table">
            <Box>
              <Typography
                variant="paragraphy"
                sx={{ display: "block", padding: "10px" }}
              >
                Delivery Status: {data.data.status}
              </Typography>
              <Typography
                variant="paragraphy"
                sx={{ display: "block", padding: "5px" }}
              >
                Delivery Address: {data.data.delivery_address}
              </Typography>
              <Typography
                variant="paragraphy"
                sx={{ display: "block", padding: "5px" }}
              >
                Customer Name: {data.data.customer_name}
              </Typography>
              <Typography
                variant="paragraphy"
                sx={{ display: "block", padding: "5px" }}
              >
                Customer Phone: {data.data.customer_phone_number}
              </Typography>
              <Typography
                variant="paragraphy"
                sx={{ display: "block", padding: "5px" }}
              >
                Ordered from:{" "}
                <Link to={`/app/Stores/${data.store_id}`}>
                  {data.data.pickup_address}
                </Link>
              </Typography>
              <Typography
                variant="paragraphy"
                sx={{ display: "block", padding: "5px" }}
              >
                Date: {data.data.date}
              </Typography>
              <Typography
                variant="paragraphy"
                sx={{ display: "block", padding: "5px" }}
              >
                Time: {data.data.time}
              </Typography>
              {data.data.status === "PICKED" ? (
                <Button
                  style={{ margin: "5px" }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Verify OTP
                </Button>
              ) : null}
              {data.data.status === "NOT_PICKED" ? (
                <Button
                  style={{ margin: "5px" }}
                  onClick={() => {
                    PickUpOrder(data.data.order_id);
                  }}
                >
                  PICK UP
                </Button>
              ) : null}
            </Box>
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
              <Verification order_id={data.data.order_id} />
            </>
          </Modal>
        </Box>
      )}
    </>
  );
};

export default Delivery;
