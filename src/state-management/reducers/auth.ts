import {LOGIN, LOGOUT} from '../types';
import {Action} from "redux";

interface state {
    isLoggedIn: boolean;
}

const initialState: state = {
    isLoggedIn:false,
};

const handleLogin = (): state => ({
    isLoggedIn: true
});

const handleLogout = () => initialState;

const handlers: any = {
    [LOGIN]: handleLogin,
    [LOGOUT]: handleLogout,
};

export default (state = initialState, action: Action) => {
    const handler = handlers[action.type];
    return handler ? handler() : state;
};