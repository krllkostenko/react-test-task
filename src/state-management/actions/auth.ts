
import {LOGIN, LOGOUT} from "../types";

export const login = (user:object) => ({
    type: LOGIN,
    payload: user,
});

export const logout = () => ({
    type: LOGOUT,
});

