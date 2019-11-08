import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Card, CardContent, Theme} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import ErrorMessagePopUp from "../../components/containers/ErrorMessagePopUp";
import {login} from "../../state-management/actions";

const useStyles = (theme: Theme): object => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
});


interface properties{
    classes:any,
    history:any,
    dispatch:Dispatch,
}


class SignUp extends Component<properties, { name: string, email: string, password: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    private handleChange = (name: string) => (event: {}) => {
        const e = event as React.ChangeEvent<HTMLInputElement>;
        this.setState({...this.state, [name]: e.currentTarget.value});
    };

    logInHandler = () => {
        this.props.dispatch(login());
        this.props.history.push('/');
    };

    signInHandler = () => {
        if (this.state.email.match(/^[\w.+-]+@gmail\.com$/) && this.state.password.length >= 6 && this.state.name.length >= 4) {
            localStorage.setItem('userData', JSON.stringify(this.state));
            this.logInHandler();
        } else {
            const errorMessage = document.querySelector('.error-message') as HTMLInputElement;
            console.log(errorMessage);
            errorMessage.setAttribute('style', 'display:block');
            setTimeout(() => {
                errorMessage.setAttribute('style', 'display:none');
            }, 3500)
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <Card>
                <CardContent>
                    <ErrorMessagePopUp error={{type: 'SignUp', data: this.state,}}/>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-name"
                            label="Nickname"
                            className={classes.textField}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            onChange={this.handleChange('email')}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            onChange={this.handleChange('password')}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.signInHandler}
                        >
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
            </Card>
        );
    }
}

interface state {
    auth: any;
}

const mapStateToProps = (state: state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
};

export default withStyles(useStyles)(connect(mapStateToProps)(SignUp));