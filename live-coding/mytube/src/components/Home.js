import React from 'react';
import { connect } from "react-redux";
import { clearVideos, fetchingVideos, retrievedVideos } from "../actions/videosActions";
import { fetchVideos } from '../api';
import SearchResults from './SearchResults';

class Home extends React.Component {
    componentDidMount() {
        this.props.getTrendingVideos();
    }

    componentWillUnmount() {
        this.props.clearVideos();
    }

    render() {
        return <main>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple app, using YouTube Data API to fetch a list of videos.</p>
                </div>
            </div>
            <div className="container">
                <h4 className="my-5">Trending Videos</h4>
            </div>
            <SearchResults />
        </main>
    }
}

function mapActionToProps(dispatch) {
    return {
        getTrendingVideos: function() {
            dispatch(fetchingVideos());
            fetchVideos(null)
                .then(result => dispatch(retrievedVideos(result)));
        },
        clearVideos: function() {
            dispatch(clearVideos());
        }
    }
}

export default connect(null, mapActionToProps)(Home);