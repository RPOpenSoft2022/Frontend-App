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
import Loader from '../../components/Loader/Loader';
import {Typography} from '@mui/material'
import ResponsiveAppBar from "../../deliveryComponents/Navbar/Navbar";
import Verification from '../Delivery/Verification'
import {
    Modal,
    TextField,
    InputAdornment,
  } from "@mui/material";

const Delivery = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    "item_list": 
        [
            {
                name: "Item 1",
                quantity: "3",
                price: "INR 100",
                id: 1,
            },
            {
                name: "Item 2",
                quantity: "3",
                price: "INR 200",
                id: 2,
            },
            {
                name: "Item 3",
                quantity: "4",
                price: "INR 150",
                id: 3,
            },
            {
                name: "Item 4",
                quantity: "3",
                price: "INR 300",
                id: 4,
            },
            {
                name: "Item 5",
                quantity: "7",
                price: "INR 455",
                id: 5,
            }
        ],
    "loading": false,
    "cost": "300",
    "delivery_otp": "8376",
    "delivery_status": "Picked",
    "delivery_address":"Some address to drop at",
    "store_id": 12,
    "store_name": "Carlos",
    "order_time": "11:00 AM"
    });

  const columns = [
    {
      title: "Item",
      dataIndex: "name",
      key: "name",
      width: 250,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 250,
    },
    {
      title: "Price Per Item",
      dataIndex: "price",
      key: "price",
      width: 250,
    },
  ];
  return (
    <>
    <ResponsiveAppBar />
    {data.loading?<Loader/>:
      <Box className="order_container">
        <h1 className="order_header">
          <SummarizeIcon
            color="primary"
            style={{ fontSize: "35px", marginBottom: "-5px" }}
          />{" "}
          Delivery Summary
        </h1>
        <Box className="order_table">
          <Table
            dataSource={data.item_list}
            columns={columns}
            style={{ minWidth: "280px", overflowX: "auto" }}
          />
          <Box>
            <Typography variant="h6">
              Total Cost: INR {data.cost}
            </Typography>
            <Typography variant="paragraphy" sx={{display: 'block'}}>
              Delivery Status: {data.delivery_status}
            </Typography>
            <Typography variant="paragraphy" sx={{display: 'block'}}>
              Delivery Address: {data.delivery_address}
            </Typography>
            <Typography variant="paragraphy" sx={{display: 'block'}}>
              Ordered from:{" "}
              <Link to={`/app/Stores/${data.store_id}`}>{data.store_name}</Link>
            </Typography>
            <Typography variant="paragraphy" sx={{display: 'block'}}>
                Date: {new Date(data.order_time).toLocaleDateString()}
            </Typography>
            <Typography variant="paragraphy" sx={{display: 'block'}}>
              Time: {new Date(data.order_time).toLocaleTimeString()}
            </Typography>
            {data.delivery_status === "Picked"?
            <Button onClick={() => {
                setOpen(true)
            }}>Verify OTP</Button>:null}
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
            <Verification />
            </>
        </Modal>
      </Box>}
    </>
  );
};

export default Delivery;
