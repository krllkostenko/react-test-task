import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from "@material-ui/core";
import ErrorMessage from "../../components/presentations/ErrorMessage";

const useStyles = makeStyles((theme) =>
    createStyles({
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
    }),
);


const SignIn = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (name) => (event) => {
        setValues({...values, [name]: event.target.value});
    };

    const logInHandler = () => {
        localStorage.setItem('isLoggedIn', true);
        let location = window.location.href;
        location = location.slice(0, location.indexOf('/signup'));
        window.location.href = `${location}/profile`;
    };

    const signInHandler = () => {
        if (values.email.match(/^[\w.+\-]+@gmail\.com$/) && values.password.length >= 6 && values.name.length >= 4) {
            localStorage.setItem('userData', JSON.stringify(values));
            logInHandler();
        } else {
            const errorMessage = document.querySelector('.error-message');
            errorMessage.setAttribute('style', 'display:block');
            setTimeout(() => {
                errorMessage.setAttribute('style', 'display:none');
            }, 3500)
        }
    };
    return (
        <Card>
            <CardContent>
                <ErrorMessage error={{type: 'SignUp', data:values,}}/>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Nickname"
                        className={classes.textField}
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        onChange={handleChange('email')}
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
                        onChange={handleChange('password')}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={signInHandler}
                    >
                        Sign Up
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
export default SignIn;