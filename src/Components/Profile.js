import React from 'react';
import {Avatar, Card, CardContent, Typography} from '@material-ui/core';
import PopUp from "./PopUp";


const Profile = () => {
    const getUserData = () => {
        return JSON.parse(localStorage.getItem('userData'));
    };
    const userData = getUserData();
    return (
        <Card>
            <CardContent>
                <Typography variant="h2" component="h2">
                    Profile
                </Typography>
                <Typography variant="body2" component="p">
                    <div className={"user-data"}>
                        <Avatar>{getUserData().name.toString().substring(0, 1)}</Avatar>
                    </div>
                    <h3>Nickname: {userData.name}</h3>
                    <h3>Email: {userData.email}</h3>
                </Typography>
                <PopUp name={userData.name} email={userData.email}/>
            </CardContent>
        </Card>
    );
};
export default Profile;