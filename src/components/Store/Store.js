import * as React from 'react';
import "./Store.css"
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GradeIcon from '@mui/icons-material/Grade';
import Box from '@mui/material/Box';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Store = (props) => {
    const { id } = useParams();
    const [store, setstore] = useState({
        "name": "PFC",
        "id": 2,
        "availabilityTime": "Weekdays - 9AM to 7PM, Weekend - 8AM to 9PM",
        "rating": "4.3",
        "contactInfo": "9434738473",
        "address": "Pan Loop, IIT Kharagpur",
        "locLatitude": "27.2046",
        "locLongitude": "77.4977",
        "image": "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg",
        "menu": [
            {
                "name": "paneer",
                "IsVeg": true,
                "price": "50",
                "id": "1",
                "thumbnail": "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
            },
            {
                "name": "paneer",
                "IsVeg": true,
                "price": "50",
                "id": "2",
                "thumbnail": "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
            },
            {
                "name": "paneer",
                "IsVeg": true,
                "price": "50",
                "id": "3",
                "thumbnail": "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
            },
            {
                "name": "paneer",
                "IsVeg": true,
                "price": "50",
                "id": "4",
                "thumbnail": "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
            },
            {
                "name": "paneer",
                "IsVeg": true,
                "price": "50",
                "id": "5",
                "thumbnail": "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
            },
            {
                "name": "paneer",
                "IsVeg": true,
                "price": "50",
                "id": "6",
                "thumbnail": "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
            },
            {
                "name": "paneer",
                "IsVeg": true,
                "price": "50",
                "id": "7",
                "thumbnail": "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
            }
        ]
    });
    useEffect(() => {
        return () => {
        }
    }, []);

    return (
        <>
            <div>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={store.image}
                            alt={store.name}
                        />
                        <CardContent sx={{ backgroundColor: "#7bbfed" }}>
                            <Typography variant="h2" component="div" color="white">
                                {store.name}
                            </Typography>

                            <Typography variant="body2" color="white">
                                <HomeIcon sx={{ transform: `translate(0%, 25%)`, padding: 0.3 }} color="white" />
                                {store.address}
                            </Typography>
                            <Typography variant="body2" color="white">
                                <AccessTimeIcon sx={{ transform: `translate(0%, 30%)`, padding: 0.3 }} color="white" />
                                {store.availabilityTime}
                            </Typography>
                            <Typography variant="body2" color="white">
                                <LocalPhoneIcon sx={{ transform: `translate(0%, 32%)`, padding: 0.3 }} color="white" />
                                +91{store.contactInfo}
                            </Typography>
                            <Typography variant="body2" color="white">
                                <GradeIcon sx={{ transform: `translate(0%, 27%)`, padding: 0.3 }} color="white" />
                                {store.rating}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Typography variant="h4" align='center' sx={{marginTop: "5px"}}>Menu</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent:"flex-start",
                        alignContent: 'center',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    {
                        store.menu.map((item) =>
                            <Card sx={{ minWidth: 320, margin: "10px" }} key={item.id}>
                                <CardMedia
                                    component="img"
                                    alt={item.name}
                                    height="140"
                                    image={item.thumbnail}
                                />
                                <CardContent sx={{ marginBottom: "-7px" }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name[0].toUpperCase() + item.name.slice(1, item.name.length)}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <CurrencyRupeeIcon fontSize="small" sx={{ transform: `translate(0%, 22%)` }} />{item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" fullWidth sx={{ backgroundColor: "primary" }}>
                                        <Typography fontFamily="monospace">Add-To-Cart</Typography>
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    }
                </Box>


            </div>
        </>
    );
}

export default Store;