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

const Stores = () => {
  let [loading, setLoading] = useState(true);
  let [storesList, setStores] = useState([]);

  const baseURL = "http://storesapp.centralindia.cloudapp.azure.com:8082/";

  useEffect(() => {
    axios
      .get(baseURL + "stores/")
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
        <h1 className="stores_header">Stores</h1>
        {storesList.map((item) => {
          return (
            <Link to={`./${item.id}`} key={item.id} className="stores_item">
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
                    {item.address + " " + item.contactInfo}
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
