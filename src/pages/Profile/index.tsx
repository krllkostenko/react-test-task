import React, {Component} from 'react';
import {Avatar, Card, CardContent, Typography} from '@material-ui/core';

import {PopUp} from "../../components";


class Profile extends Component<{}, { userData: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            userData: JSON.parse(localStorage.getItem('userData') || '{}'),
        };
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h2" component="h2">
                        Profile
                    </Typography>
                    <Typography variant="body2" component="div">
                        <div className={"user-data"}>
                            <Avatar>{this.state.userData.name}</Avatar>
                        </div>
                        <h3>Nickname: {this.state.userData.name}</h3>
                        <h3>Email: {this.state.userData.email}</h3>
                    </Typography>
                    <PopUp name={this.state.userData.name} email={this.state.userData.email}/>
                </CardContent>
            </Card>
        );
    }

    componentDidMount() {
        this.setState({userData: JSON.parse(localStorage.getItem('userData') || '{}')});
    }
}

export default Profile;