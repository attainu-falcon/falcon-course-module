import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { loginUser } from '../actions/loginActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.googleCallback = this.googleCallback.bind(this);
    }

    googleCallback(response) {
        console.log(response);
        if(!response || !response.accessToken) {
            alert("Sorry, failed to login. Try again.");
            return;
        }

        let user = {
            name: response.profileObj.name,
            token: response.accessToken
        }

        localStorage.setItem('user', JSON.stringify(user));

        this.props.doLogin();
    }

    render() {
        return <div className="ml-auto">
            <GoogleLogin
                clientId="886252175319-pmhq5uqg4nu7l0v28g21g3387knl6ned.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.googleCallback}
                onFailure={this.googleCallback}
                scope="https://www.googleapis.com/auth/youtube"
            />
        </div>
    }
}

function mapActionToProps(dispatch) {
    return {
        doLogin: function() {
            dispatch(loginUser());
        }
    }
}

export default connect(null, mapActionToProps)(Login);