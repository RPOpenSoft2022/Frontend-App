import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
<<<<<<< HEAD
import axios from 'axios'

const Profile = () => {
	const [backendUser,setBackendUser] = useState({});
	const accessToken = localStorage.getItem('access');
	const url ='http://127.0.0.1:8000/';
	const [user, setUser] = useState(backendUser);
	const fullName = [backendUser.firstNameBack,
						backendUser.middleNameBack,
						backendUser.lastNameBack].join(' ');
	useEffect( () => {axios.get(`${url}/get-user/`,  {
									headers:{
										Authorization: `Bearer ${accessToken}`
									}}).then(res => res.data)
									.then(data=>setBackendUser(data))
									.then(console.log(backendUser))}
				,[])

=======

import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

import axios from 'axios'

const Profile = () => {
	const backendUser = {email:"",
							firstName:"",
							middleName:"",
							lastName:"",
							phoneNumber:"",
							gender:"",
							foodPreference:"",
							profileImage:""
						}
	const [userData, setUserData] = useState(backendUser);
	const updateUser = (key, value) => setUserData({...userData, key:value});
	const fullName = [backendUser.firstNameBack, backendUser.middleNameBack, backendUser.lastNameBack].join(' ');
	// const [user, setUser] = useContext(UserContext)
	// const access = localStorage.getItem('access')
	// const [isFetched, setIsfetched] = useState(false)
	// if(!isFetched){
	// 	const url = "http://127.0.0.1:8000/api/get-user/"
	// 	const config = {
	// 		headers:{
	// 			Authorization: `Bearer ${access}` 
	// 		}		
	// 	}
	// 	axios.get(url, config)
	// 	.then(res => {
	// 		console.log(res.data)
	// 		setUser({data: res.data,})
	// 		setIsfetched(true)
	// 		console.log(user)
	// 	})
	// }
>>>>>>> 6530960e01d374d11208c92c02801815de761910
    return (
        <div className="edit-profile">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:"center",
                    width: "90%",
                    maxWidth: "400px",
                    margin: "Auto"
                }}
            >
				<Avatar
					style={{
						margin: "Auto",
						width: "100px",
						height: "100px"
					}}
					alt={ [fullName, '\'s Picture'].join() }
					src= {userData.profileImage}
				/>
                <span
                    style={{
                        fontSize: 30,
                        margin:"auto"
                    }}
                >{ fullName }</span>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<FormControl variant="standard" style={{margin:"0 2px"}}>
						<InputLabel htmlFor="firstName">
							First Name
						</InputLabel>
						<Input
							id="firstName"
							value={userData.firstName}
							style={{width: "100%"}}
							onChange={(e) => setUser({...user, firstName:e.target.value})}
							/>
					</FormControl>
					<FormControl variant="standard" style={{margin:"0 2px"}}>
						<InputLabel htmlFor="middleName">
							Middle Name
						</InputLabel>
						<Input
							id="middleName"
							value={userData.middleName}
							style={{width: "100%"}}
							onChange={(e) => setUser({...user, middleName:e.target.value})}
						/>
					</FormControl>
					<FormControl variant="standard" style={{margin:"0 2px"}}>
						<InputLabel htmlFor="lastName">
							Last Name
						</InputLabel>
						<Input
							id="lastName"
							value={userData.lastName}
							style={{width: "100%"}}
							onChange={(e) => setUser({...user, lastName:e.target.value})}
							/>
					</FormControl>
				</Box>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="email" >Email</InputLabel>
                    <Input
                        id="email"
                        value={userData.email}
                        style={{width: "100%"}}
						onChange={(e) => setUser({...user, email:e.target.value})}
						/>
				</FormControl>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="phoneNumber">
						Phone Number
                    </InputLabel>
                    <Input
                        id="phoneNumber"
                        value={userData.phoneNumber}
                        style={{width: "100%"}}
						onChange={(e) => setUser({...user, phoneNumber:e.target.value})}
						/>
                </FormControl>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="gender">
						Gender
                    </InputLabel>
                    <Input
                        id="gender"
                        value={userData.gender}
                        style={{width: "100%"}}
						onChange={(e) => setUser({...user, gender:e.target.value})}
						/>
                </FormControl>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="foodPreference">
						Food Preference
                    </InputLabel>
                    <Input
                        id="foodPreference"
                        value={userData.foodPreference}
                        style={{width: "100%"}}
						onChange={(e) => setUser({...user, foodPreference:e.target.value})}
						/>
                </FormControl>
                <FormControl variant="standard" >
					<Button
						variant="outlined"
						onClick={()=> {
							const sender = {};
							for (let key in backendUser) {
								if (backendUser[key] != user[key]){
									sender[key] = user[key]
								}
							}
							axios.post(`${url}/update-user/`, sender, {
								headers:{Authorization: `Bearer ${accessToken}`
							}});
						}}
						style={{
							width: "20%",
							margin: "auto"
						}}
					>
						Update
					</Button>
                </FormControl>
                <FormControl variant="standard" >
					<Link
                        to="/change-password"
                        style={{
                            textDecoration: "none",
                            margin: "auto"
                        }}
                    >
                        <Button
                            variant="contained"
                        > Change Password </Button>
                    </Link>
					</FormControl>
            </Box>
        </div>
    );
}

export default Profile;