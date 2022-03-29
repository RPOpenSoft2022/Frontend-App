import axios from 'axios';
import React,{useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import { Typography, Box} from '@mui/material';

function Logout() {
	const userURL = process.env.REACT_APP_USER_BASE_URL;
	const refresh = localStorage.getItem("refresh");
	const navigate = useNavigate();

	useEffect(() => {
		axios.post(`${userURL}logout/`, {
			"refresh": refresh
		}).then(()=>{
			localStorage.removeItem("access");
			localStorage.removeItem("refresh");
			navigate('/');
		})
	}, [])
	
  return (
	  	<Box> 
		  <Typography variant="h4" align='center' >Logging Out ....</Typography>
		</Box>
  )
}

export default Logout