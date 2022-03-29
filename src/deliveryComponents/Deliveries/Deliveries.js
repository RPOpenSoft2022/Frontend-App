import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Table } from "antd";
import Box from "@mui/material/Box";
import axios from "axios";
import "antd/dist/antd.css";
import { columns, columns1 } from "./TableColumn";
import "./Deliveries.css";
import ResponsiveAppBar from "../../deliveryComponents/Navbar/Navbar";

const orderStatus = {
  3: "('OUT_FOR_DELIVERY', 'Out for Delivery')",
  4: "('DELIVERED', 'Delivered')",
  5: "('CANCELLED', 'Cancelled')",
};

const statusCodes = {
  3: "Out for Delivery",
  4: "Delivered",
  5: "Cancelled",
};

export default function Deliveries() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState({
    dataSource: [
      {
        order_id: 1,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Picked",
      },
      {
        order_id: 2,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Not Picked",
      },
      {
        order_id: 3,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Picked",
      },
      {
        order_id: 4,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Picked",
      },
      {
        order_id: 5,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Not Picked",
      },
    ],
    dataSource1: [
      {
        order_id: 1,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Delivered",
      },
      {
        order_id: 2,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Cancelled",
      },
      {
        order_id: 3,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Delivered",
      },
      {
        order_id: 4,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Delivered",
      },
      {
        order_id: 5,
        pickup_address: "Some random address",
        delivery_address: "Some random address",
        delivery_status: "Cancelled",
      },
    ],
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const baseURL = process.env.REACT_APP_ORDER_BASE_URL;
  const access = localStorage.getItem("access");
  console.log(baseURL);

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <div className="orders_container">
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginTop: "10px" }}
          color="primary"
          component="div"
        >
          {" "}
          Your Deliveries{" "}
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Current Deliveries" {...a11yProps(0)} />
              <Tab label="Past Deliveries" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel
            value={value}
            index={0}
            className="orders_box"
            component="div"
          >
            <Table
              dataSource={data.dataSource}
              columns={columns}
              style={{ minWidth: "280px" }}
              onChange={onChange}
            />
          </TabPanel>
          <TabPanel value={value} index={1} className="orders_box">
            <Table
              dataSource={data.dataSource1}
              columns={columns1}
              style={{ minWidth: "280px" }}
            />
          </TabPanel>
        </Box>
      </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const orderObject = (item) => {
  const { order_id, store_id, order_time, store_name, cost, status } = item;
  let date = new Date(order_time);
  return {
    date: date.toLocaleDateString(),
    store: {
      name: store_name,
      store_id: store_id,
    },
    time: date.toLocaleTimeString(),
    cost: cost,
    status: statusCodes[status],
    id: order_id,
  };
};
