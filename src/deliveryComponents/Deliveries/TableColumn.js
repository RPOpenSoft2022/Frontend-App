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
    dataIndex: "delivery_id",
    key: "delivery_id",
    width: 250,
    render: (text) => <Link to={`/app/Deliveries/${text}`}>View</Link>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 250,
    filters: [
      {
        text: "PICKED",
        value: "PICKED",
      },
      {
        text: "NOT_PICKED",
        value: "NOT_PICKED",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
];

export const columns1 = columns.slice(0, 4);

columns1.push({
  title: "Status",
  dataIndex: "status",
  key: "status",
  width: 250,
});
