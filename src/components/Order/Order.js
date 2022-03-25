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
            "store": {
                "name": "Store A",
                "store_id": 1 
            },
            "price": "INR 100",
            "id": 1
        },
        {
            "name": "Item 2",
            "quantity": "3",
            "store": {
                "name": "Store B",
                "store_id": 2 
            },
            "price": "INR 200",
            "id": 2
        },
        {
            "name": "Item 3",
            "quantity": "4",
            "store": {
                "name": "Store C",
                "store_id": 3 
            },
            "price": "INR 150",
            "id": 3
        },
        {
            "name": "Item 4",
            "quantity": "3",
            "store": {
                "name": "Store D",
                "store_id": 4
            },
            "price": "INR 300",
            "id": 4
        },
        {
            "name": "Item 5",
            "quantity": "7",
            "store": {
                "name": "Store E",
                "store_id": 5
            },
            "price": "INR 455",
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
        {
            title: 'Store',
            dataIndex: 'store',
            key: 'store',
            width: 250,
            render: (text) => <a href={`../Stores/${text.store_id}`}>{text.name}</a>,
        },
        {
            title: 'Price Per Item',
            dataIndex: 'price',
            key: 'price',
            width: 250
        },
    ];

    return (
        <>
            <div className="order_container">
                <h1 className="order_header"><SummarizeIcon color="primary" style={{fontSize:"35px", marginBottom:"-5px"}}/> Order Summary</h1>
                <div className="order_table">
                    <Table dataSource={dataSource} columns={columns} style={{ minWidth: "280px", overflowX: "auto" }}/>
                <div>
                    <div><b>Total Cost: INR 2000</b></div>
                    <div><i>Date: 22 Jan, 2022</i></div>
                    <div><i>Time: 8.30 PM</i></div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Order;