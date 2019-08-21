import React from 'react';
import { connect } from 'react-redux';
import { fetchingVideos, retrievedVideos } from '../actions/videosActions';
import { fetchVideos } from '../api';

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
                        <button className="btn btn-danger" type="button" onClick={this.props.handleClick}>Search</button>
                    </div>
                </div> 
            </div>
        </div>
    }
}

function mapActionToProps(dispatch) {
    console.log("SearchBox ==> mapActionToProps");
    console.log(dispatch);
    return {
        handleClick: function (e) {
            console.log(e.target.parentNode.previousSibling.value);
            dispatch(fetchingVideos());
            fetchVideos(e.target.parentNode.previousSibling.value)
                .then(result => dispatch(retrievedVideos(result)));
        }
    }
}

export default connect(null, mapActionToProps)(SearchBox);