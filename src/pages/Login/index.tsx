import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";
import {Card, CardContent, Theme} from "@material-ui/core/";
import {connect} from 'react-redux';

import ErrorMessagePopUp from "../../components/containers/ErrorMessagePopUp";
import {login} from "../../state-management/actions";


const useStyles = (theme: Theme): object => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
    }
});

class Login extends Component<{ classes: any }, { email: string; password: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    private handleChange = (name: string) => (event: {}) => {
        const e = event as React.ChangeEvent<HTMLInputElement>;
        this.setState({...this.state, [name]: e.currentTarget.value});
    };

    logInHandler = () => {
        const userData = JSON.parse(localStorage.getItem("userData") || "{}");
        if (userData !== null) {
            if (this.state.email === userData.email && this.state.password === userData.password) {
               this.props.history.push('/');
                this.props.dispatch(login());
            } else {
                const errorMessage = document.querySelector(".error-message") as HTMLInputElement;
                errorMessage.setAttribute("style", "display:block");
                setTimeout(() => {
                    errorMessage.setAttribute("style", "display:none");
                }, 4500);
            }
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <Card>
                <CardContent>
                    <ErrorMessagePopUp error={{type: "Login", data: this.state}}/>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange("email")}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange("password")}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.logInHandler}
                        >
                            LogIn
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

export default withStyles(useStyles)(connect(mapStateToProps)(Login));
