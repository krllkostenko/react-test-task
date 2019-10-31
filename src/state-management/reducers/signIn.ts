const initialState = {
    isLoggedIn: false,
};
const handleLogin = () => ({
    isLoggedIn: true,
});
const handleLogout = () => initialState;

const handlers = {
    ['LOGIN']: handleLogin,
    ['LOGOUT']: handleLogout,
};

const signInReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return state = {
                name: state[0],
                email: state[1],
                password: state[2]
            };
        default:
            return state = {
                isLoggedIn: false,
            };
    }
};
export default signInReducer;