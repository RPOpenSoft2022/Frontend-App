import { Link } from "react-router-dom";
import { Button } from "antd";

export const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 250,
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: 250,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
    width: 250,
    render: (text) => `INR ${text}`,
  },
  {
    title: "View Store",
    dataIndex: "store",
    key: "store",
    width: 250,
    render: (text) => <Link to={`/Stores/${text.store_id}`}>{text.name}</Link>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 250,
    filters: [
      {
        text: "Accepted",
        value: "Accepted",
      },
      {
        text: "Pending",
        value: "Pending",
      },
      {
        text: "Out for Delivery",
        value: "Out for Delivery",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
  {
    title: "Action",
    dataIndex: "id",
    key: "id",
    width: 250,
    render: (text) => (
      <div>
        <Button
          type="primary"
          style={{ marginRight: "5px", marginBottom: "5px" }}
        >
          <Link to={`../Orders/${text}`}>view</Link>
        </Button>
        <Button type="danger" style={{ marginBottom: "5px" }}>
          <Link to={`#`}>cancel</Link>
        </Button>
      </div>
    ),
  },
];

export let columns1 = columns.slice(0, 3);

columns1.push({
  title: "Status",
  dataIndex: "status",
  key: "status",
  width: 250,
  filters: [
    {
      text: "Delivered",
      value: "Delivered",
    },
    {
      text: "Cancelled",
      value: "Cancelled",
    },
  ],
  onFilter: (value, record) => record.status.indexOf(value) === 0,
});

columns1.push({
  title: "Action",
  dataIndex: "id",
  key: "id",
  width: 250,
  render: (text) => (
    <Button type="primary">
      <Link to={`../Orders/${text}`}>view</Link>
    </Button>
  ),
});
