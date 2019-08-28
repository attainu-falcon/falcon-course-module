import React from 'react';

class Profile extends React.Component {
    render() {
        // console.log(this.props);
        return <h5 className="mx-5 my-2">Logged in as {this.props.name}</h5>
    }
}

export default Profile;