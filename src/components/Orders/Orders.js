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
        "store": "Store A",
        "time": "8:30 PM",
        "id": 1
    },
    {
        "date": "22 Jan, 2022",
        "store": "Store B",
        "time": "8:31 PM",
        "id": 2
    },
    {
        "date": "23 Jan, 2022",
        "store": "Store C",
        "time": "8:32 PM",
        "id": 3
    },
    {
        "date": "24 Jan, 2022",
        "store": "Store D",
        "time": "8:33 PM",
        "id": 4
    },
    {
        "date": "25 Jan, 2022",
        "store": "Store E",
        "time": "8:34 PM",
        "id": 5
    },
    {
        "date": "21 Jan, 2022",
        "store": "Store A",
        "time": "8:30 PM",
        "id": 1
    },
    {
        "date": "22 Jan, 2022",
        "store": "Store B",
        "time": "8:31 PM",
        "id": 2
    },
    {
        "date": "23 Jan, 2022",
        "store": "Store C",
        "time": "8:32 PM",
        "id": 3
    },
    {
        "date": "24 Jan, 2022",
        "store": "Store D",
        "time": "8:33 PM",
        "id": 4
    },
    {
        "date": "25 Jan, 2022",
        "store": "Store E",
        "time": "8:34 PM",
        "id": 5
    },{
        "date": "21 Jan, 2022",
        "store": "Store A",
        "time": "8:30 PM",
        "id": 1
    },
    {
        "date": "22 Jan, 2022",
        "store": "Store B",
        "time": "8:31 PM",
        "id": 2
    },
    {
        "date": "23 Jan, 2022",
        "store": "Store C",
        "time": "8:32 PM",
        "id": 3
    },
    {
        "date": "24 Jan, 2022",
        "store": "Store D",
        "time": "8:33 PM",
        "id": 4
    },
    {
        "date": "25 Jan, 2022",
        "store": "Store E",
        "time": "8:34 PM",
        "id": 5
    },
    ]

    const dataSource1 = [
        {
            "date": "29 Jan, 2022",
            "store": "Store A",
            "time": "8:30 PM",
            "id": 1
        },
        {
            "date": "30 Jan, 2022",
            "store": "Store B",
            "time": "8:31 PM",
            "id": 2
        },
        {
            "date": "31 Jan, 2022",
            "store": "Store C",
            "time": "8:32 PM",
            "id": 3
        },
        {
            "date": "01 Feb, 2022",
            "store": "Store D",
            "time": "8:33 PM",
            "id": 4
        },
        {
            "date": "02 Feb, 2022",
            "store": "Store E",
            "time": "8:34 PM",
            "id": 5
        },
        {
            "date": "03 Feb, 2022",
            "store": "Store A",
            "time": "8:30 PM",
            "id": 1
        },
        {
            "date": "04 Feb, 2022",
            "store": "Store B",
            "time": "8:31 PM",
            "id": 2
        },
        {
            "date": "05 Feb, 2022",
            "store": "Store C",
            "time": "8:32 PM",
            "id": 3
        },
        {
            "date": "06 Feb, 2022",
            "store": "Store D",
            "time": "8:33 PM",
            "id": 4
        },
        {
            "date": "07 Feb, 2022",
            "store": "Store E",
            "time": "8:34 PM",
            "id": 5
        },{
            "date": "08 Feb, 2022",
            "store": "Store A",
            "time": "8:30 PM",
            "id": 1
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
          title: 'Store',
          dataIndex: 'store',
          key: 'store',
          width: 250 
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'id',
            width: 250,
            render: (text) => <a href={`Orders/${text}`}>view</a>,
        },
      ];


    return (
        <div className="orders_container">
            <h1 className="orders_header">Your Orders</h1>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Current Orders" {...a11yProps(0)} />
                    <Tab label="Past Orders" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} className="orders_box">    
                <Table  dataSource={dataSource} columns={columns}  style={{minWidth:"280px"}}/>
            </TabPanel>
            <TabPanel value={value} index={1} className="orders_box">    
                <Table  dataSource={dataSource1} columns={columns} style={{minWidth:"280px"}} />
            </TabPanel>
        </Box>
        </div>
    );
}
