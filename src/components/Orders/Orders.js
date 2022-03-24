import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./Orders.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

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
    const [pastOrders, setpastOrders] = useState([
        {
            "name": "French Fries",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "PFC",
            "id": 1
        },
        {
            "name": "Oreo Shake",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "Subway",
            "id": 2
        },
        {
            "name": "Veg Roll",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "Smart Pind",
            "id": 3
        },
        {
            "name": "Alu Paratha",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "Heritage",
            "id": 4
        },
        {
            "name": "Paneer Tikka",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "Tikka",
            "id": 5
        },
    ])

    const [currentOrders, setCurrentOrders] = useState([
        {
            "name": "Alu Paratha",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": false,
            "store": "PFC",
            "id": 1
        },
        {
            "name": "Pav Bhaji",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "Subway",
            "id": 2
        },
        {
            "name": "Samosa Pav",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "Smart Pind",
            "id": 3
        },
        {
            "name": "Sandwich",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": false,
            "store": "Heritage",
            "id": 4
        },
        {
            "name": "Burger",
            "quantity": 3,
            "total_price": 100,
            "paymentDone": true,
            "store": "Tikka",
            "id": 5
        },
    ])
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Current Orders" {...a11yProps(0)} />
                    <Tab label="Past Orders" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} className="orders_container">    
                {currentOrders && currentOrders.map((item) => 
                    <Link to={`./${item.id}`} key={item.id} class="orders_item">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.store}
                            </Typography>
                        </CardContent>
                        <CardActions>
                    <Button size="contained"><CurrencyRupeeIcon />{item.total_price}</Button>
                    <Button size="contained">{item.paymentDone?'Done':'Not Done'}</Button>
                </CardActions>
                    </Card>
                </Link>)}
            </TabPanel>
            <TabPanel value={value} index={1} className="orders_container">    
                {pastOrders && pastOrders.map((item) => 
                    <Link to={`./${item.id}`} key={item.id} class="orders_item">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.store}
                                </Typography>
                            </CardContent>
                            <CardActions>
                        <Button size="contained" color="primary"><CurrencyRupeeIcon />{item.total_price}</Button>
                        <Button size="contained" color="primary">{item.paymentDone?'Done':'Not Done'}</Button>
                    </CardActions>
                        </Card>
                    </Link>
                    )}
            </TabPanel>
        </Box>
    );
}
