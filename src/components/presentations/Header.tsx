import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Button, createStyles, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {logout} from "../../state-management/actions";
import store from '../../state-management';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1
        }
    })
);

interface headerProps{
    dispatch: Dispatch,
    auth?:any,
    isLoggedIn?:Boolean,
};

const Header = (props:headerProps) => {
    const classes = useStyles();
    const logoutHandler = () => {
        props.dispatch(logout());
        let location = window.location.href;
        location = location.slice(0, location.indexOf("/profile"));
        window.location.href = `${location}/login`;
    };
    const isLoggedIn = () => {
        if (!store.getState().auth.isLoggedIn) {
            return (
                <div>
                    <Link to={"/signup"}>
                        <Button color="inherit">Sign Up</Button>
                    </Link>
                    <Link to={"/login"}>
                        <Button color="inherit">Login</Button>
                    </Link>
                </div>
            );
        } else {
            return (
                <Button
                    color="inherit"
                    onClick={logoutHandler}>
                    Logout
                </Button>
            );
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                ></IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to={"/"}>Test Task</Link>
                </Typography>
                {isLoggedIn()}
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state: headerProps) => ({
    isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(Header);
