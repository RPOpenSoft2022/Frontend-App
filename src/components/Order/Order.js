import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./Order.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Table, Select, Input, Button } from 'antd';
import Box from '@mui/material/Box';
import 'antd/dist/antd.css';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Order = () => {

    const dataSource = [
        {
            "name": "Item 1",
            "quantity": "3",
            "id": 1
        },
        {
            "name": "Item 2",
            "quantity": "3",
            "id": 2
        },
        {
            "name": "Item 3",
            "quantity": "4",
            "id": 3
        },
        {
            "name": "Item 4",
            "quantity": "3",
            "id": 4
        },
        {
            "name": "Item 5",
            "quantity": "7",
            "id": 5
        },
    ]

    const columns = [
        {
            title: 'Item',
            dataIndex: 'name',
            key: 'name',
            width: 250
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            width: 250
        },
    ];

    return (
        <>
            <div className="order_container">
                <h1 className="order_header"><SummarizeIcon color="primary" style={{fontSize:"35px", marginBottom:"-5px"}}/> Order Summary</h1>
                <div className="order_table">
                    <Table dataSource={dataSource} columns={columns} style={{ minWidth: "280px", overflowX: "auto" }}/>
                </div>
            </div>
        </>
    );
}

export default Order;