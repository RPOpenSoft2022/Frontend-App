import * as React from "react";
import { useState, useEffect } from "react";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button } from "@mui/material";


const EditProfile = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [foodPreference, setFoodPreference] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="edit-profile">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                    display: "flex",
                    flexDirection: "column",
                    width: "90%",
                    maxWidth: "400px",
                    margin: "Auto"
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input id="component-simple" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">First Name</InputLabel>
                    <Input id="component-simple" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Middle Name</InputLabel>
                    <Input id="component-simple" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                    <Input id="component-simple" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
                    <Input id="component-simple" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Gender</InputLabel>
                    <Input id="component-simple" value={gender} onChange={(e) => setGender(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Food Preference</InputLabel>
                    <Input id="component-simple" value={foodPreference} onChange={(e) => setFoodPreference(e.target.value)} />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input id="component-simple" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button 
                    variant="contained"
                >
                    Submit
                </Button>
            </Box>
        </div>
    );
}

export default EditProfile;