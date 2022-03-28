import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import axios from 'axios';

const Profile = () => {
	const baseURL = process.env.REACT_APP_API_URL
	const access = localStorage.getItem('access')
	const [ data, setData ] = useState('')
	useEffect(() => {
		if(data === ''){
			const url = baseURL + "api/get-user/"
			const config = {
			headers:{
				Authorization: `Bearer ${access}` 
				}		
			}
			axios.get(url, config)
			.then(res => {
				console.log(res)
				setData(res.data)
			})
			.catch((err) => window.alert(err.response.data["message"]))
		}
	}, [data])

	const updateData = () => {
		const url = baseURL + "api/update-user/"
		const config = {
		headers:{
			Authorization: `Bearer ${access}` 
			}		
		}
		axios.put(url, config, data)
		.then(res => window.alert(res.data["message"]))
		.catch(err => window.alert(err.response.data["message"]))
	}

    return (
        <div className="edit-profile">
			{data!=''&&
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
					alt={ [data.first_name, '\'s Picture'].join() }
				/>
                <span
                    style={{
                        fontSize: 30,
                        margin:"auto"
                    }}
                >{`${data.first_name} ${data.middle_name} ${data.last_name}`}</span>
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
							value={data.first_name}
							style={{width: "100%"}}
							onChange={(e) => setData({...data, first_name:e.target.value})}
							/>
					</FormControl>
					<FormControl variant="standard" style={{margin:"0 2px"}}>
						<InputLabel htmlFor="middleName">
							Middle Name
						</InputLabel>
						<Input
							id="middleName"
							value={data.middle_name}
							style={{width: "100%"}}
							onChange={(e) => setData({...data, middle_name:e.target.value})}
						/>
					</FormControl>
					<FormControl variant="standard" style={{margin:"0 2px"}}>
						<InputLabel htmlFor="lastName">
							Last Name
						</InputLabel>
						<Input
							id="lastName"
							value={data.last_name}
							style={{width: "100%"}}
							onChange={(e) => setData({...data, last_name:e.target.value})}
							/>
					</FormControl>
				</Box>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="email" >Email</InputLabel>
                    <Input
                        id="email"
                        value={data.email}
                        style={{width: "100%"}}
                        onChange={(e) => setData({...data, email:e.target.value})}
                    />
				</FormControl>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="phoneNumber">
						Phone Number
                    </InputLabel>
                    <Input
                        id="phoneNumber"
                        value={data.phone}
                        style={{width: "100%"}}
                        onChange={(e) => setData({...data, phone:e.target.value})}
                    />
                </FormControl>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="gender">
						Gender
                    </InputLabel>
                    <Input
                        id="gender"
                        value={data.gender}
                        style={{width: "100%"}}
                        onChange={(e) => setData({...data, gender:e.target.value})}
                    />
                </FormControl>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="foodPreference">
						Food Preference
                    </InputLabel>
                    <Input
                        id="foodPreference"
                        value={data.food_preference}
                        style={{width: "100%"}}
                        onChange={(e) => setData({...data, food_preference:e.target.value})}
                    />
                </FormControl>
                <FormControl variant="standard" >
					<Button
						variant="outlined"
						style={{
							width: "20%",
							margin: "auto"
						}}
						onClick = {updateData}
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
            </Box>}
        </div>
    );
}

export default Profile;