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
  useEffect(() => {
    let dataSource = [],
      dataSource1 = [];
    const fetchUrl = (user.user_category == 'Customer'?'past_orders':`store/${user.storeData.id}`);
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
