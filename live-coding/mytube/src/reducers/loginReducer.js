function loginReducer(state = { loggedIn: JSON.parse(localStorage.getItem('user')) }, action) {
    console.log('loginReducer()');

    switch (action.type) {
        case 'LOGIN_USER':
            return Object.assign({}, state, { loggedIn: localStorage.getItem('user') });

        case 'LOGOUT_USER':
            return Object.assign({}, state, { loggedIn: null });

        default:
            return state;
    }
}

export default loginReducer;