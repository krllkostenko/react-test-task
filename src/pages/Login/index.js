import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from "@material-ui/core/";
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


const Index = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (name) => (event) => {
        setValues({...values, [name]: event.target.value});
    };

    const logInHandler = () => {
        localStorage.setItem('isLoggedIn', true);
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData !== null) {
            if (values.email === userData.email && values.password === userData.password) {
                let location = window.location.href;
                location = location.slice(0, location.indexOf('/login'));
                window.location.href = `${location}/profile`;
            } else {
                const errorMessage = document.querySelector('.error-message');
                errorMessage.setAttribute('style', 'display:block');
                setTimeout(() => {
                    errorMessage.setAttribute('style', 'display:none');
                }, 4500)
            }

        }
    };
    return (
        <Card>
            <CardContent>
                <ErrorMessage error={{type: 'Login', data: values,}}/>
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
                        onChange={handleChange('email')}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange('password')}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={logInHandler}
                    >
                        LogIn
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
export default Index;
