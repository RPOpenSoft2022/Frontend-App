import React, { useState, createContext } from "react";
import { userData } from "./User";
import axios from "axios";
export const UserContext = createContext();

export const fetchDetails = (user, setUser) =>{
	const baseURL = process.env.REACT_APP_API_URL;
	const access = localStorage.getItem('access')
	const url = baseURL + "get-user/"
	const config = {
		headers:{
			Authorization: `Bearer ${access}` 
		}		
	}
	axios.get(url, config)
	.then(res => {
		console.log('fetching user details');
		console.log(res.data);
		setUser(res.data);
		console.log(user);
	})
};

export const UserProvider = (props) => {
    const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
