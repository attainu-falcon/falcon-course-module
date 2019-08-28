export function loginUser() {
    console.log('action: LOGIN_USER');
    return {
        type: 'LOGIN_USER'
    };
}

export function logoutUser() {
    console.log('action: LOGOUT_USER');
    return {
        type: 'LOGOUT_USER'
    };
}