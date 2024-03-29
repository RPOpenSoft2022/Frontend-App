import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./Orders.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Table, Select, Input, Button } from 'antd';
import Box from '@mui/material/Box';
import 'antd/dist/antd.css';
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dataSource = [
        {
            "date": "21 Jan, 2022",
            "store": {
                "name": "Store A",
                "store_id": 1 
            },
            "time": "8:30 PM",
            "cost": "50",
            "id": 1,
            "status": "Accepted"
        },
        {
            "date": "22 Jan, 2022",
            "store": {
                "name": "Store B",
                "store_id": 2
            },
            "time": "8:31 PM",
            "cost": "150",
            "id": 2,
            "status": "Out for Delivery"
        },
        {
            "date": "23 Jan, 2022",
            "store": {
                "name": "Store C",
                "store_id": 3 
            },
            "time": "8:32 PM",
            "cost": "250",
            "id": 3,
            "status": "Accepted"
        },
        {
            "date": "24 Jan, 2022",
            "store": {
                "name": "Store D",
                "store_id": 4 
            },
            "time": "8:33 PM",
            "cost": "650",
            "id": 4,
            "status": "Accepted"
        },
        {
            "date": "25 Jan, 2022",
            "store": {
                "name": "Store E",
                "store_id": 5 
            },
            "time": "8:34 PM",
            "cost": "520",
            "id": 5,
            "status": "Accepted"
        },
        {
            "date": "21 Jan, 2022",
            "store": {
                "name": "Store F",
                "store_id": 6 
            },
            "time": "8:30 PM",
            "cost": "510",
            "id": 1,
            "status": "Pending"
        },
        {
            "date": "22 Jan, 2022",
            "store": {
                "name": "Store G",
                "store_id": 7 
            },
            "time": "8:31 PM",
            "cost": "344",
            "id": 2,
            "status": "Pending"
        },
        {
            "date": "23 Jan, 2022",
            "store": {
                "name": "Store H",
                "store_id": 8
            },
            "time": "8:32 PM",
            "cost": "567",
            "id": 3,
            "status": "Out for Delivery"
        },
        {
            "date": "24 Jan, 2022",
            "store": {
                "name": "Store I",
                "store_id": 9 
            },
            "time": "8:33 PM",
            "cost": "990",
            "id": 4,
            "status": "Out for Delivery"
        },
        {
            "date": "25 Jan, 2022",
            "store": {
                "name": "Store J",
                "store_id": 10
            },
            "time": "8:34 PM",
            "cost": "510",
            "id": 5,
            "status": "Accepted"
        }, {
            "date": "21 Jan, 2022",
            "store": {
                "name": "Store K",
                "store_id": 11 
            },
            "time": "8:30 PM",
            "cost": "250",
            "id": 1,
            "status": "Pending"
        },
        {
            "date": "22 Jan, 2022",
            "store": {
                "name": "Store L",
                "store_id": 12 
            },
            "time": "8:31 PM",
            "cost": "50",
            "id": 2,
            "status": "Pending"
        },
        {
            "date": "23 Jan, 2022",
            "store": {
                "name": "Store M",
                "store_id": 13 
            },
            "time": "8:32 PM",
            "cost": "500",
            "id": 3,
            "status": "Accepted"
        },
        {
            "date": "24 Jan, 2022",
            "store": {
                "name": "Store N",
                "store_id": 14 
            },
            "time": "8:33 PM",
            "cost": "539",
            "id": 4,
            "status": "Out for Delivery"
        },
        {
            "date": "25 Jan, 2022",
            "store": {
                "name": "Store O",
                "store_id": 15 
            },
            "time": "8:34 PM",
            "cost": "233",
            "id": 5,
            "status": "Pending"
        },
    ]

    const dataSource1 = [
        {
            "date": "29 Jan, 2022",
            "store": {
                "name": "Store P",
                "store_id": 16 
            },
            "time": "8:30 PM",
            "cost": "110",
            "status": "Cancelled",
            "id": 1
        },
        {
            "date": "30 Jan, 2022",
            "store": {
                "name": "Store Q",
                "store_id": 17 
            },
            "time": "8:31 PM",
            "cost": "570",
            "status": "Delivered",
            "id": 2
        },
        {
            "date": "31 Jan, 2022",
            "store": {
                "name": "Store R",
                "store_id": 18 
            },
            "time": "8:32 PM",
            "cost": "670",
            "status": "Delivered",
            "id": 3
        },
        {
            "date": "01 Feb, 2022",
            "store": {
                "name": "Store S",
                "store_id": 19 
            },
            "time": "8:33 PM",
            "cost": "765",
            "status": "Delivered",
            "id": 4
        },
        {
            "date": "02 Feb, 2022",
            "store": {
                "name": "Store T",
                "store_id": 20
            },
            "time": "8:34 PM",
            "cost": "874",
            "status": "Cancelled",
            "id": 5
        },
        {
            "date": "03 Feb, 2022",
            "store": {
                "name": "Store U",
                "store_id": 21
            },
            "time": "8:30 PM",
            "cost": "540",
            "status": "Delivered",
            "id": 1
        },
        {
            "date": "04 Feb, 2022",
            "store": {
                "name": "Store V",
                "store_id": 22 
            },
            "time": "8:31 PM",
            "cost": "210",
            "status": "Delivered",
            "id": 2
        },
        {
            "date": "05 Feb, 2022",
            "store": {
                "name": "Store W",
                "store_id": 23 
            },
            "time": "8:32 PM",
            "cost": "220",
            "status": "Delivered",
            "id": 3
        },
        {
            "date": "06 Feb, 2022",
            "store": {
                "name": "Store X",
                "store_id": 24
            },
            "time": "8:33 PM",
            "cost": "530",
            "status": "Delivered",
            "id": 4
        },
        {
            "date": "07 Feb, 2022",
            "store": {
                "name": "Store Y",
                "store_id": 25 
            },
            "time": "8:34 PM",
            "cost": "770",
            "status": "Delivered",
            "id": 5
        }, {
            "date": "08 Feb, 2022",
            "store": {
                "name": "Store Z",
                "store_id": 26 
            },
            "time": "8:30 PM",
            "cost": "760",
            "status": "Delivered",
            "id": 6
        }
    ]

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 250
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            width: 250
        },
        {
            title: 'Cost',
            dataIndex: 'cost',
            key: 'cost',
            width: 250,
            render: (text) => `INR ${text}`
        },
        {
            title: 'View Store',
            dataIndex: 'store',
            key: 'store',
            width: 250 ,
            render: (text) => <Link to={`/Stores/${text.store_id}`}>{text.name}</Link>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 250 ,
            filters: [
                {
                  text: 'Accepted',
                  value: 'Accepted',
                },
                {
                  text: 'Pending',
                  value: 'Pending',
                },
                {
                  text: 'Out for Delivery',
                  value: 'Out for Delivery',
                },
              ],
              onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'id',
            width: 250,
            render: (text) => <div>
                <Button type="primary" style={{marginRight:"5px", marginBottom:"5px"}}><Link to={`../Orders/${text}`}>view</Link></Button>
                <Button type="danger" style={{marginBottom:"5px"}}><Link to={`#`}>cancel</Link></Button>
                </div>,
        },
    ];

    const columns1 = columns.slice(0,3)    
    
    columns1.push({
        title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 250 ,
            filters: [
                {
                  text: 'Delivered',
                  value: 'Delivered',
                },
                {
                  text: 'Cancelled',
                  value: 'Cancelled',
                },
              ],
              onFilter: (value, record) => record.status.indexOf(value) === 0,
    })

    columns1.push({
        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        width: 250,
        render: (text) => <Button type="primary"><Link to={`../Orders/${text}`}>view</Link></Button>,
    })

   

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }


    return (
        <div className="orders_container">
            <Typography variant="h2" sx={{textAlign: "center", marginTop: "10px"}} color="primary"> Your Orders </Typography>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Current Orders" {...a11yProps(0)} />
                        <Tab label="Past Orders" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} className="orders_box">
                    <Table dataSource={dataSource} columns={columns} style={{ minWidth: "280px" }} onChange={onChange}/>
                </TabPanel>
                <TabPanel value={value} index={1} className="orders_box">
                    <Table dataSource={dataSource1} columns={columns1} style={{ minWidth: "280px" }} />
                </TabPanel>
            </Box>
        </div>
    );
}
