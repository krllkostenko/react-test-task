import React, {Component} from 'react';
import {Avatar, Card, CardContent, Typography} from '@material-ui/core';
import PopUp from "../presentations/PopUp";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
        };
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h2" component="h2">
                        Profile
                    </Typography>
                    <Typography variant="body2" component="p">
                        <div className={"user-data"}>
                            <Avatar>{this.state.userData.name}</Avatar>
                        </div>
                        <h3>Nickname: {this.state.userData.name}</h3>
                        <h3>Email: {this.state.userData.email}</h3>
                    </Typography>
                    <PopUp name={this.state.userData.name} email={this.state.email}/>
                </CardContent>
            </Card>
        );
    }

    componentDidMount() {
        this.setState({userData: JSON.parse(localStorage.getItem('userData'))});
    }
}

export default Profile;