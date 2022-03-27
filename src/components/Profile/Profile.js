import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";


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
	const [user, setUser] = useState(backendUser);
	const fullName = [backendUser.firstNameBack, backendUser.middleNameBack, backendUser.lastNameBack].join(' ');

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
					src= {user.profileImage}
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
							value={user.firstName}
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
							value={user.middleName}
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
							value={user.lastName}
							style={{width: "100%"}}
							onChange={(e) => setUser({...user, lastName:e.target.value})}
							/>
					</FormControl>
				</Box>
                <FormControl variant="standard" >
                    <InputLabel htmlFor="email" >Email</InputLabel>
                    <Input
                        id="email"
                        value={user.email}
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
                        value={user.phoneNumber}
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
                        value={user.gender}
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
                        value={user.foodPreference}
                        style={{width: "100%"}}
						onChange={(e) => setUser({...user, foodPreference:e.target.value})}
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