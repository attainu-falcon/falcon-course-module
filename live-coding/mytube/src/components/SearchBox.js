import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        // No internal state, but bind 'this' to class methods
    }

    render() {
        return <div className="jumbotron">
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg" placeholder="What do you want to see?" />
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="button">Search</button>
                    </div>
                </div> 
            </div>
        </div>
    }
}


// mapActionToProps(updateListOfVideosInStore())
export default SearchBox