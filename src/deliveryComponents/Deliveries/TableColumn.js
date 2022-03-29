import { Link } from "react-router-dom";
import { Button } from "antd";

export const columns = [
  {
    title: "Order id",
    dataIndex: "order_id",
    key: "order_id",
    width: 250,
  },
  {
    title: "Pickup Address",
    dataIndex: "pickup_address",
    key: "pickup_address",
    width: 250,
  },
  {
    title: "Delivery Address",
    dataIndex: "delivery_address",
    key: "delivery_address",
    width: 250,
  },
  {
    title: "View Delivery",
    dataIndex: "order_id",
    key: "order_id",
    width: 250,
    render: (text) => <Link to={`/Delivery/${text}`}>View</Link>,
  },
];

