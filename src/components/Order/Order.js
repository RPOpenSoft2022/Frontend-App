import * as React from "react";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Table, Select, Input } from "antd";
import Box from "@mui/material/Box";
import "antd/dist/antd.css";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from '../Loader/Loader';
import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import { UserContext } from "../../Contexts/UserContext";

const Order = () => {
  const { id } = useParams();
  const [data, setData] = useState({"loading": true});
  const [user, setuser] = useContext(UserContext);
  const baseURL = process.env.REACT_APP_ORDER_BASE_URL;
  const access = localStorage.getItem("access");

  useEffect(() => {
    axios
      .get(baseURL + `order/${id}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((res) => {
        console.log(res.data);
        setData({...res.data, "loading": false});
      });
  }, []);

  const PrepareOrder = () => {
    axios.post(baseURL + `order/${id}/prepared`)
    .then((res)=>{
      console.log(res);
      window.alert(res.data['msg']);
    }).catch((err)=>{
      console.log(err);
      window.alert(err);
    }) 
  }

  // const dataSource = [
  //   {
  //     name: "Item 1",
  //     quantity: "3",
  //     price: "INR 100",
  //     id: 1,
  //   },
  //   {
  //     name: "Item 2",
  //     quantity: "3",
  //     price: "INR 200",
  //     id: 2,
  //   },
  //   {
  //     name: "Item 3",
  //     quantity: "4",
  //     price: "INR 150",
  //     id: 3,
  //   },
  //   {
  //     name: "Item 4",
  //     quantity: "3",
  //     price: "INR 300",
  //     id: 4,
  //   },
  //   {
  //     name: "Item 5",
  //     quantity: "7",
  //     price: "INR 455",
  //     id: 5,
  //   },
  // ];

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
      dataIndex: "item_price",
      key: "price",
      width: 250,
    },
  ];
  return (
    <>
    {data.loading?<Loader/>:
      <Box className="order_container">
        <h1 className="order_header">
          <SummarizeIcon
            color="primary"
            style={{ fontSize: "35px", marginBottom: "-5px" }}
          />{" "}
          Order Summary
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
            <Typography variant="subtitle2">
             Delivery otp: {data.delivery_otp}
            </Typography>
            <Typography variant="paragraphy" sx={{display: 'block'}}>
              Order Status: {data.delivery_status.split(",")[1].slice(2, -2)}
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
          </Box>
          {
            (user.user_category == 'Staff')
            &&
            ((data.delivery_status == "('ACCEPTED', 'Preparing Item')")
            ||
            (data.delivery_status == "('PENDING', 'Payment Pending')"))
            &&
            <Button variant='contained' onClick={PrepareOrder}>
              Order Prepared
            </Button>
          }
        </Box>
      </Box>}
    </>
  );
};

export default Order;
