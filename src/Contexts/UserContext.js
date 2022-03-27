import React, { useState, createContext } from "react";
import { userData } from "./User";
import axios from 'axios'
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
	const access = localStorage.getItem('access')
	const [isFetched, setIsfetched] = useState(false)
	const baseURL = process.env.REACT_APP_API_URL

	if(!isFetched && access!==null){
		const url = baseURL + "get-user/"
		const config = {
			headers:{
				Authorization: `Bearer ${access}` 
			}		
		}
		axios.get(url, config)
		.then(res => {
			console.log(res.data)
			setUser({data: res.data,})
			setIsfetched(true)
			console.log(user)
		})
	}
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
