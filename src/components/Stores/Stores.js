import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Stores.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Stores = () => {
  let [loading, setLoading] = useState(true);
  let [storesList, setStores] = useState([]);

  const baseURL = process.env.REACT_APP_STORE_BASE_URL;

  useEffect(() => {
    axios
      .get(baseURL + "stores/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data["stores"]);
        setStores(res.data["stores"]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <div className="stores_container">
        <Typography className="stores_header" variant="h2" color="primary">
          Stores
        </Typography>
        {storesList.map((item) => {
          return (
            <Link to={`./${item.id}`} key={item.id} className="stores_item">
              <Card sx={{ height: 350 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://img.etimg.com/thumb/width-1200,height-900,imgsize-122620,resizemode-1,msid-75214721/industry/services/retail/future-group-negotiates-rents-for-its-1700-stores.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <HomeIcon sx={{ transform: `translate(0%, 22%)` }} />
                    {item.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <LocalPhoneIcon sx={{ transform: `translate(0%, 30%)` }} />
                    {item.contactInfo}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Stores;
