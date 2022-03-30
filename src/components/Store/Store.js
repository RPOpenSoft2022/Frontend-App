import * as React from "react";
import "./Store.css";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GradeIcon from "@mui/icons-material/Grade";
import Box from "@mui/material/Box";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { CartContext } from "../../Contexts/CartContext";
import axios from "axios";
import Loader from "../Loader/Loader";
import { UserContext } from "../../Contexts/UserContext";


const Store = (props) => {
  const { id } = useParams();
  const [cart, setCart] = useContext(CartContext);
  const [store, setstore] = useState({ loading: true });
  const baseURL = process.env.REACT_APP_STORE_BASE_URL;
  const [user, setuser] = useContext(UserContext);

  useEffect(() => {
    if(user.user_category == 'Customer'){
      axios.get(baseURL + `stores/${id}`).then((res) => {
        console.log(res.data);
        if (cart.store_id == id) {
          const storeMenu = res.data.menu;
          cart.item_list.map((cartItem) => {
            const itemIndex = storeMenu.findIndex(
              (item) => item.id == cartItem.id
            );
            storeMenu[itemIndex].selected = true;
          });
          res.data = { ...res.data, menu: storeMenu };
        }
        setstore({ ...res.data, loading: false });
      });
   }else if(user.user_category == 'Staff'){
      setstore({ ...user.storeData, loading: false });
   }
  }, []);

  const addToCart = (item) => {
    if (item.selected) {
      // show a notification that item is already selected
      return;
    }
    if (!cart.store_id || cart.store_id != id) {
      // show a notification that older selected items will be removed
      setCart({});
      setCart({
        store_id: id,
        store_name: store.name,
        item_list: [{ ...item, quantity: 1 }],
      });
      item.selected = true;
      return;
    }
    let items = cart.item_list;
    if (!items) items = [item];
    else items = [...items, { ...item, quantity: 1 }];
    setCart({ ...cart, item_list: items });
    item.selected = true;
    // show a notification that items is selected
  };

  return (
    <>
      {store.loading ? (
        <Loader />
      ) : (
        <div>
          <StoreCard {...store} />
          <Typography
            variant="h3"
            align="center"
            sx={{ marginTop: "10px" }}
            color="primary"
          >
            Menu
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignContent: "center",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            {store.menu.map((item) => (
              <Card sx={{ minWidth: 320, margin: "15px" }} key={item.id}>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="140"
                  image={item.thumbnail}
                />
                <CardContent sx={{ marginBottom: "-7px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name[0].toUpperCase() +
                      item.name.slice(1, item.name.length)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <CurrencyRupeeIcon
                      fontSize="small"
                      sx={{ transform: `translate(0%, 22%)` }}
                    />
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={{ backgroundColor: "primary" }}
                    onClick={() => addToCart(item)}
                    disabled={item.selected}
                  >
                    <Typography fontFamily="monospace">
                      {item.selected ? "Added-To-Cart" : "Add-To-Cart"}
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </div>
      )}
    </>
  );
};

const StoreCard = (props) => {
  const { name, address, availabilityTime, contactInfo, rating } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={
            "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg"
          }
          alt={name}
        />
        <CardContent
          sx={{ backgroundImage: "linear-gradient(#000000, #1667a6)" }}
        >
          <Typography variant="h1" component="div" color="white">
            {name}
          </Typography>

          <Typography variant="body2" color="white">
            <HomeIcon
              sx={{ transform: `translate(0%, 25%)`, padding: 0.3 }}
              color="white"
            />
            {address}
          </Typography>
          <Typography variant="body2" color="white">
            <AccessTimeIcon
              sx={{ transform: `translate(0%, 30%)`, padding: 0.3 }}
              color="white"
            />
            {availabilityTime}
          </Typography>
          <Typography variant="body2" color="white">
            <LocalPhoneIcon
              sx={{ transform: `translate(0%, 32%)`, padding: 0.3 }}
              color="white"
            />
            +91{contactInfo}
          </Typography>
          <Typography variant="body2" color="white">
            <GradeIcon
              sx={{ transform: `translate(0%, 27%)`, padding: 0.3 }}
              color="white"
            />
            {rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Store;
