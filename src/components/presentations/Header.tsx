import React from "react";
import {
  AppBar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import store from "../../state-management";
import {login } from "../../state-management/actions";


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

const Header = () => {
  const classes = useStyles();

  const isLoggedIn = () => {
    const isLoggedIn = store.getState().auth.isLoggedIn;
    if (!isLoggedIn) {
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
            store.dispatch(login());
            console.log(store.getState().auth.isLoggedIn);
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

export default Header;
