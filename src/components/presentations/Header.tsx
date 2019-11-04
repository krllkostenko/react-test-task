import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Button, createStyles, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

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

const Header = (props) => {
    const classes = useStyles();
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
                    onClick={() => {
                        props.dispatch(logout());
                        let location = window.location.href;
                        location = location.slice(0, location.indexOf("/profile"));
                        window.location.href = `${location}/login`;
                    }}
                >
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

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state: properties) => ({
    isLoggedIn: state.auth.isLoggedIn,
});


export default connect(mapStateToProps)(Header);
