import axios from 'axios';
import React,{useContext, useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import { Typography, Box} from '@mui/material';
import {UserContext} from '../../Contexts/UserContext';

function Logout() {
	const userURL = process.env.REACT_APP_USER_BASE_URL;
	const refresh = localStorage.getItem("refresh");
	const [user, setuser] = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		axios.post(`${userURL}logout/`, {
			"refresh": refresh
		}).then(()=>{
			localStorage.removeItem("access");
			localStorage.removeItem("refresh");
			setuser({});
			navigate('/');
		})
	}, [])
	
  return (
	  	<Box> 
		  <Typography variant="h4" align='center' color='primary' sx={{marginTop: "20vh"}}>Logging Out ....</Typography>
		</Box>
  )
}

export default Logout