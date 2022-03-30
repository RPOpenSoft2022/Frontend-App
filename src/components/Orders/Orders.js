import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useContext} from "react";
import { Table } from "antd";
import Box from "@mui/material/Box";
import axios from "axios";
import "antd/dist/antd.css";
import { columns, columns1 } from "./TableColumn";
import "./Orders.css";
import { UserContext } from "../../Contexts/UserContext";

const orderStatus = {
  1: "('PENDING', 'Payment Pending')",
  2: "('ACCEPTED', 'Preparing Item')",
  3: "('OUT_FOR_DELIVERY', 'Out for Delivery')",
  4: "('DELIVERED', 'Delivered')",
  5: "('CANCELLED', 'Cancelled')",
};

const statusCodes = {
  1: "Payment Pending",
  2: "Preparing Item",
  3: "Out for Delivery",
  4: "Delivered",
  5: "Cancelled",
};

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState({ dataSource: [], dataSource1: [] });
  const [user, setuser] = useContext(UserContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const baseURL = process.env.REACT_APP_ORDER_BASE_URL;
  const access = localStorage.getItem("access");
  console.log(baseURL);
  useEffect(() => {
    let dataSource = [],
      dataSource1 = [];
    const fetchUrl = (user.user_category == 'Customer'?'past_order':`store/${user.store_id}`);
    axios
      .get(baseURL + `order/${fetchUrl}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((res) => {
        console.log(res.data);
        res.data.map((item) => {
          let status = item.delivery_status;
          for (let i = 1; i <= 5; ++i) {
            if (status == orderStatus[i]) {
              if (i === 4 || i === 5) {
                dataSource1 = [
                  ...dataSource1,
                  orderObject({ ...item, status: i }),
                ];
              } else {
                dataSource = [
                  ...dataSource,
                  orderObject({ ...item, status: i }),
                ];
              }
            }
          }
        });
        const updatedData = {
          dataSource: dataSource,
          dataSource1: dataSource1,
        };
        console.log(dataSource);
        console.log(dataSource1);
        setData(updatedData);
        console.log(data);
      });
  }, []);

  // const dataSource = [
  //   {
  //     date: "21 Jan, 2022",
  //     store: {
  //       name: "Store A",
  //       store_id: 1,
  //     },
  //     time: "8:30 PM",
  //     cost: "50",
  //     id: 1,
  //     status: "Accepted",
  //   },
  //   {
  //     date: "22 Jan, 2022",
  //     store: {
  //       name: "Store B",
  //       store_id: 2,
  //     },
  //     time: "8:31 PM",
  //     cost: "150",
  //     id: 2,
  //     status: "Out for Delivery",
  //   },
  //   {
  //     date: "23 Jan, 2022",
  //     store: {
  //       name: "Store C",
  //       store_id: 3,
  //     },
  //     time: "8:32 PM",
  //     cost: "250",
  //     id: 3,
  //     status: "Accepted",
  //   },
  //   {
  //     date: "24 Jan, 2022",
  //     store: {
  //       name: "Store D",
  //       store_id: 4,
  //     },
  //     time: "8:33 PM",
  //     cost: "650",
  //     id: 4,
  //     status: "Accepted",
  //   },
  //   {
  //     date: "25 Jan, 2022",
  //     store: {
  //       name: "Store E",
  //       store_id: 5,
  //     },
  //     time: "8:34 PM",
  //     cost: "520",
  //     id: 5,
  //     status: "Accepted",
  //   },
  //   {
  //     date: "21 Jan, 2022",
  //     store: {
  //       name: "Store F",
  //       store_id: 6,
  //     },
  //     time: "8:30 PM",
  //     cost: "510",
  //     id: 1,
  //     status: "Pending",
  //   },
  //   {
  //     date: "22 Jan, 2022",
  //     store: {
  //       name: "Store G",
  //       store_id: 7,
  //     },
  //     time: "8:31 PM",
  //     cost: "344",
  //     id: 2,
  //     status: "Pending",
  //   },
  //   {
  //     date: "23 Jan, 2022",
  //     store: {
  //       name: "Store H",
  //       store_id: 8,
  //     },
  //     time: "8:32 PM",
  //     cost: "567",
  //     id: 3,
  //     status: "Out for Delivery",
  //   },
  //   {
  //     date: "24 Jan, 2022",
  //     store: {
  //       name: "Store I",
  //       store_id: 9,
  //     },
  //     time: "8:33 PM",
  //     cost: "990",
  //     id: 4,
  //     status: "Out for Delivery",
  //   },
  //   {
  //     date: "25 Jan, 2022",
  //     store: {
  //       name: "Store J",
  //       store_id: 10,
  //     },
  //     time: "8:34 PM",
  //     cost: "510",
  //     id: 5,
  //     status: "Accepted",
  //   },
  //   {
  //     date: "21 Jan, 2022",
  //     store: {
  //       name: "Store K",
  //       store_id: 11,
  //     },
  //     time: "8:30 PM",
  //     cost: "250",
  //     id: 1,
  //     status: "Pending",
  //   },
  //   {
  //     date: "22 Jan, 2022",
  //     store: {
  //       name: "Store L",
  //       store_id: 12,
  //     },
  //     time: "8:31 PM",
  //     cost: "50",
  //     id: 2,
  //     status: "Pending",
  //   },
  //   {
  //     date: "23 Jan, 2022",
  //     store: {
  //       name: "Store M",
  //       store_id: 13,
  //     },
  //     time: "8:32 PM",
  //     cost: "500",
  //     id: 3,
  //     status: "Accepted",
  //   },
  //   {
  //     date: "24 Jan, 2022",
  //     store: {
  //       name: "Store N",
  //       store_id: 14,
  //     },
  //     time: "8:33 PM",
  //     cost: "539",
  //     id: 4,
  //     status: "Out for Delivery",
  //   },
  //   {
  //     date: "25 Jan, 2022",
  //     store: {
  //       name: "Store O",
  //       store_id: 15,
  //     },
  //     time: "8:34 PM",
  //     cost: "233",
  //     id: 5,
  //     status: "Pending",
  //   },
  // ];

  // const dataSource1 = [
  //   {
  //     date: "29 Jan, 2022",
  //     store: {
  //       name: "Store P",
  //       store_id: 16,
  //     },
  //     time: "8:30 PM",
  //     cost: "110",
  //     status: "Cancelled",
  //     id: 1,
  //   },
  //   {
  //     date: "30 Jan, 2022",
  //     store: {
  //       name: "Store Q",
  //       store_id: 17,
  //     },
  //     time: "8:31 PM",
  //     cost: "570",
  //     status: "Delivered",
  //     id: 2,
  //   },
  //   {
  //     date: "31 Jan, 2022",
  //     store: {
  //       name: "Store R",
  //       store_id: 18,
  //     },
  //     time: "8:32 PM",
  //     cost: "670",
  //     status: "Delivered",
  //     id: 3,
  //   },
  //   {
  //     date: "01 Feb, 2022",
  //     store: {
  //       name: "Store S",
  //       store_id: 19,
  //     },
  //     time: "8:33 PM",
  //     cost: "765",
  //     status: "Delivered",
  //     id: 4,
  //   },
  //   {
  //     date: "02 Feb, 2022",
  //     store: {
  //       name: "Store T",
  //       store_id: 20,
  //     },
  //     time: "8:34 PM",
  //     cost: "874",
  //     status: "Cancelled",
  //     id: 5,
  //   },
  //   {
  //     date: "03 Feb, 2022",
  //     store: {
  //       name: "Store U",
  //       store_id: 21,
  //     },
  //     time: "8:30 PM",
  //     cost: "540",
  //     status: "Delivered",
  //     id: 1,
  //   },
  //   {
  //     date: "04 Feb, 2022",
  //     store: {
  //       name: "Store V",
  //       store_id: 22,
  //     },
  //     time: "8:31 PM",
  //     cost: "210",
  //     status: "Delivered",
  //     id: 2,
  //   },
  //   {
  //     date: "05 Feb, 2022",
  //     store: {
  //       name: "Store W",
  //       store_id: 23,
  //     },
  //     time: "8:32 PM",
  //     cost: "220",
  //     status: "Delivered",
  //     id: 3,
  //   },
  //   {
  //     date: "06 Feb, 2022",
  //     store: {
  //       name: "Store X",
  //       store_id: 24,
  //     },
  //     time: "8:33 PM",
  //     cost: "530",
  //     status: "Delivered",
  //     id: 4,
  //   },
  //   {
  //     date: "07 Feb, 2022",
  //     store: {
  //       name: "Store Y",
  //       store_id: 25,
  //     },
  //     time: "8:34 PM",
  //     cost: "770",
  //     status: "Delivered",
  //     id: 5,
  //   },
  //   {
  //     date: "08 Feb, 2022",
  //     store: {
  //       name: "Store Z",
  //       store_id: 26,
  //     },
  //     time: "8:30 PM",
  //     cost: "760",
  //     status: "Delivered",
  //     id: 6,
  //   },
  // ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="orders_container">
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginTop: "10px" }}
        color="primary"
        component="div"
      >
        {" "}
        Your Orders{" "}
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Current Orders" {...a11yProps(0)} />
            <Tab label="Past Orders" {...a11yProps(1)} />
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
