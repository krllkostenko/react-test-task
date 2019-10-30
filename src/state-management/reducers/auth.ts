import {LOGIN, LOGOUT} from '../types';

const initialState = {
    isLoggedIn: false,
};

const handleLogin = () => ({
    isLoggedIn: true
});

const handleLogout = () => initialState;

const handlers = {
    [LOGIN]: handleLogin,
    [LOGOUT]: handleLogout,
};

export default (state = initialState, action: any) => {
    const handler: Function = handlers[action.type];
    return handler ? handler() : state;
};