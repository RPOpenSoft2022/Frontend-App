import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

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
	const [user, setUser] = useContext(UserContext)
	const access = localStorage.getItem('access')
	const [isFetched, setIsfetched] = useState(false)
	if(!isFetched){
		const url = "http://127.0.0.1:8000/api/get-user/"
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
							onChange={(e) => updateUser("firstName",e.target.value)}
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
							onChange={(e) => updateUser("middleName",e.target.value)}
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
							onChange={(e) => updateUser("lastName",e.target.value)}
							/>
					</FormControl>
				</Box>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="email" >Email</InputLabel>
                    <Input
                        id="email"
                        value={userData.email}
                        style={{width: "100%"}}
                        onChange={(e) => updateUser("email",e.target.value)}
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
                        onChange={(e) => updateUser("phoneNumber",e.target.value)}
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
                        onChange={(e) => updateUser("gender",e.target.value)}
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
                        onChange={(e) => updateUser("foodPreference",e.target.value)}
                    />
                </FormControl>
                <FormControl variant="standard" >
					<Button
						variant="outlined"
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