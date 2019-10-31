import {LOGIN, LOGOUT} from '../types';

const initialState = {
    isLoggedIn: false,
};

const handleLogin = () => ({
    isLoggedIn: true
});

const handleLogout = () => initialState;

const handlers:any = {
    [LOGIN]: handleLogin,
    [LOGOUT]: handleLogout,
};

export default (state = initialState, action: any) => {
    const handler = handlers[action.type];
    return handler ? handler() : state;
};