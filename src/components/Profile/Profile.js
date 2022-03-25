import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";


const Profile = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [foodPreference, setFoodPreference] = useState('');

	// Data From Backend
    const [profileImage, setProfileImage] = useState()
	const firstNameBack = "Jagteshver";
    const middleNameBack = "Singh";
    const lastNameBack = "Sahni";
	const fullName = [firstNameBack, middleNameBack, lastNameBack].join(' ')

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
                noValidate
                autoComplete="off"
            >
				<Avatar
					style={{
						margin: "Auto",
						width: "100px",
						height: "100px"
					}}
					alt={ [fullName, '\'s Picture'].join() }
					src= {profileImage}
				/>
                <span
                    style={{
                        fontSize: 30,
                        margin:"auto"
                    }}
                >{ fullName }</span>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        id="email"
                        value={email}
                        style={{width: "75%", marginRight:"Auto"}}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            width: "20%",
                            height: "70%"
                        }}
                        onClick={(e)=>(
                            console.log("")
                        )}
                    >
                        Update
                    </Button>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input
                        id="firstName"
                        value={firstName}
                        style={{width: "75%", marginRight:"Auto"}}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            width: "20%",
                            height: "70%"
                        }}
                    >
                        Update
                    </Button>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
                    <InputLabel htmlFor="middleName">Middle Name</InputLabel>
                    <Input
                        id="middleName"
                        value={middleName}
                        style={{width: "75%", marginRight:"Auto"}}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            width: "20%",
                            height: "70%"
                        }}
                    >
                        Update
                    </Button>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input
                        id="lastName"
                        value={lastName}
                        style={{width: "75%", marginRight:"Auto"}}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            width: "20%",
                            height: "70%"
                        }}
                    >
                        Update
                    </Button>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
                    <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                    <Input
                        id="phoneNumber"
                        value={phoneNumber}
                        style={{width: "75%", marginRight:"Auto"}}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            width: "20%",
                            height: "70%"
                        }}
                    >
                        Update
                    </Button>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
                    <InputLabel htmlFor="gender">Gender</InputLabel>
                    <Input
                        id="gender"
                        value={gender}
                        style={{width: "75%", marginRight:"Auto"}}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            width: "20%",
                            height: "70%"
                        }}
                    >
                        Update
                    </Button>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
                    <InputLabel htmlFor="foodPreference">Food Preference</InputLabel>
                    <Input
                        id="foodPreference"
                        value={foodPreference}
                        style={{width: "75%", marginRight:"Auto"}}
                        onChange={(e) => setFoodPreference(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        style={{
                            width: "20%",
                            height: "70%"
                        }}
                    >
                        Update
                    </Button>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        display: "flex",
                        flexDirection: "Row",
                    }}
                >
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