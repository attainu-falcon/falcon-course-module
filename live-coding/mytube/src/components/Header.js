import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        // No internal state, but bind 'this' to class methods
    }

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                    <span className="navbar-brand mb-0 h1">myTube</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <button className="btn btn-outline-light ml-auto">Logout</button>
                    </div>
                </nav>

    }
}

export default Header