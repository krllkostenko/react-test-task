
const signInReducer = (state, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return state = {
                name:state[0],
                email:state[1],
                password:state[2]
            };
       default:
            return state = {
                isLoggedIn: false,
            };
    }
};
export default signInReducer;