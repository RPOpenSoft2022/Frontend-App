import * as React from 'react';
import "./Store.css"
import { useState, useEffect} from 'react';
import { Link, useParams} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GradeIcon from '@mui/icons-material/Grade';

const Store = (props) => {
    const {id} = useParams();
    const [store, setstore] = useState({
        "name":"PFC",
        "id":2,
        "availabilityTime":"Weekdays - 9AM to 7PM, Weekend - 8AM to 9PM",
        "rating":"4.3",
        "contactInfo":"9434738473",
        "address":"Pan Loop, IIT Kharagpur",
        "locLatitude":"27.2046",
        "locLongitude":"77.4977",
        "image":"https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg",
        "menu":[
            {
                "name":"paneer",
                "IsVeg":true,
                "price":"50",
                "thumbnail":"fafdfahsdfadf"   
            },
            {
                "name":"paneer",
                "IsVeg":true,
                "price":"50",
                "thumbnail":"fafdfahsdfadf"   
            },
            {
                "name":"paneer",
                "IsVeg":true,
                "price":"50",
                "thumbnail":"fafdfahsdfadf"   
            },
            {
                "name":"paneer",
                "IsVeg":true,
                "price":"50",
                "thumbnail":"fafdfahsdfadf"   
            },
            {
                "name":"paneer",
                "IsVeg":true,
                "price":"50",
                "thumbnail":"fafdfahsdfadf"   
            },
            {
                "name":"paneer",
                "IsVeg":true,
                "price":"50",
                "thumbnail":"fafdfahsdfadf"   
            },
            {
                "name":"paneer",
                "IsVeg":true,
                "price":"50",
                "thumbnail":"fafdfahsdfadf"   
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
                <CardContent sx={{backgroundColor:"#7bbfed"}}>
                <Typography variant="h2" component="div" color="white">
                    {store.name}
                </Typography>
                
                <Typography variant="body2" color="white">
                    <HomeIcon sx={{transform: `translate(0%, 25%)`, padding: 0.3}} color="white"/> 
                    {store.address}
                </Typography>
                <Typography variant="body2" color="white">
                    <AccessTimeIcon sx={{transform: `translate(0%, 30%)`, padding: 0.3}} color="white"/>
                    {store.availabilityTime}
                </Typography>
                <Typography variant="body2" color="white">
                    <LocalPhoneIcon sx={{transform: `translate(0%, 32%)`, padding: 0.3}} color="white"/>
                    +91{store.contactInfo}
                </Typography>
                <Typography variant="body2" color="white">
                    <GradeIcon sx={{transform: `translate(0%, 27%)`, padding: 0.3}} color="white"/>
                    {store.rating}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
    </div>
    </> 
    );
}
 
export default Store;