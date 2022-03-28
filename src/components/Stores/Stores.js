import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Stores.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Stores = () => {
  let [loading, setLoading] = useState(true);
  const [stores, setStores] = useState(null)
  const baseURL = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios.get(baseURL+'stores/')
    .then(res => {
      console.log(res.data)
    })
  }, [])
  let [stores_list, setStores_List] = useState([
    {
      Store_Name: "Subway",
      Store_Desc: "Some Description about Subway fast food franchise.",
      thumbnail:
        "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      id: 1,
    },
    {
      Store_Name: "PFC",
      Store_Desc: "Some Description about Subway fast food franchise.",
      thumbnail:
        "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      id: 2,
    },
    {
      Store_Name: "Smart Pind",
      Store_Desc: "Some Description about Subway fast food franchise.",
      thumbnail:
        "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      id: 3,
    },
    {
      Store_Name: "Heritage",
      Store_Desc: "Some Description about Subway fast food franchise.",
      thumbnail:
        "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      id: 4,
    },
    {
      Store_Name: "CCD",
      Store_Desc: "Some Description about Subway fast food franchise.",
      thumbnail:
        "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      id: 5,
    },
    {
      Store_Name: "Tikka",
      Store_Desc: "Some Description about Subway fast food franchise.",
      thumbnail:
        "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      id: 6,
    },
  ]);

  // useEffect(() => {
  //     axios.get('/#/')
  //         .then(res => {
  //             console.log(res.data["stores_list"])
  //             setStores_List(res.data["stores_list"])
  //             console.log(stores_list)
  //             setLoading(false)
  //         })
  //         .catch(err => { console.log(err) })
  // },
  // [])

  return (
    <>
      <div className="stores_container">
        <Typography className="stores_header" variant="h3" color="primary">Stores</Typography>
        {stores_list.length !== null &&
          stores_list.map((item) => (
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
                    {item.Store_Name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.Store_Desc}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
              </Card>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Stores;
