import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Button, createStyles, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {connect} from 'react-redux';
import {Action} from 'redux';

import { actions } from '../../state-management';

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

interface headerProps {
    isLoggedIn?: boolean,
    logout: Action<>
};

const Header = (props: headerProps) => {
    const classes = useStyles();
    
    const loginButtons = [
        {
            link: "/signup",
            name: "Sign Up"
        },
        {
            link: "/login",
            name: "Login"
        }
    ]
    
    const logoutHandler = () => {
        props.logout();
        props.history.replace('/');
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
                {
                    isLoggedIn ? (
                        <div>
                            loginButtons.map(button => (
                                <Link to={button.link}>
                                    <Button color="inherit">{button.name}</Button>
                                </Link>
                            ))
                        </div>
                    ) : (
                        <Button
                            color="inherit"
                            onClick={logoutHandler}
                        >
                            Logout
                        </Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state: headerProps) => ({
    isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps, { logout: actions.logout })(Header);
