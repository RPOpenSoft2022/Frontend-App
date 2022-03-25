import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./Order.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Table, Select, Input, Button } from 'antd';
import Box from '@mui/material/Box';
import 'antd/dist/antd.css';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useParams } from 'react-router-dom'

const Order = () => {
    const { id } = useParams()
    // useEffect(() => {
    //     console.log(id)
    // }, [])
    const dataSource = [
        {
            "name": "Item 1",
            "quantity": "3",
            "price": "INR 100",
            "id": 1
        },
        {
            "name": "Item 2",
            "quantity": "3",
            "price": "INR 200",
            "id": 2
        },
        {
            "name": "Item 3",
            "quantity": "4",
            "price": "INR 150",
            "id": 3
        },
        {
            "name": "Item 4",
            "quantity": "3",
            "price": "INR 300",
            "id": 4
        },
        {
            "name": "Item 5",
            "quantity": "7",
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
                    <div>Ordered from: <Link to={`../Stores/${id}`}>Store A</Link></div>
                    <div><i>Date: 22 Jan, 2022</i></div>
                    <div><i>Time: 8.30 PM</i></div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Order;