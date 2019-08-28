import React from 'react';
import { connect } from 'react-redux';
import { clearVideos, fetchingVideos, retrievedVideos } from '../actions/videosActions';
import { fetchVideoDetails } from '../api';
import CommentsThread from './CommentsThread';

class Player extends React.Component {
    componentDidMount() {
        this.props.getDetails(this.props.match.params.videoId);
    }

    componentWillUnmount() {
        this.props.clearDetails();
    }

    render() {
        return <main>
            <div className="jumbotron">
                {this.props.videosList && this.props.videosList.length === 1 ?
                    <div className="container">
                        <p className="lead">{this.props.videosList[0].snippet.title}</p>
                        <div className="videoplayer-wrapper">
                            <iframe className="videoplayer" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <div className="videostats card">
                            <div className="card-body">
                                <i className="far fa-eye"></i>&nbsp;
                                {this.props.videosList[0].statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                <span className="float-right">
                                    <i className="far fa-thumbs-up"></i>&nbsp;
                                    {this.props.videosList[0].statistics.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    <i className="far fa-thumbs-down ml-3"></i>&nbsp;
                                    {this.props.videosList[0].statistics.dislikeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </span>
                            </div>
                        </div>
                    </div> :
                    "..."
                }
            </div>
            <CommentsThread videoId={this.props.match.params.videoId} />
        </main>
    }
}

function mapStateToProps(state) {
    return {videosList: state.videosReducer.videosList};
}

function mapActionToProps(dispatch) {
    return {
        getDetails: function (videoId) {
            console.log("getDetails()");
            dispatch(fetchingVideos());
            fetchVideoDetails(videoId)
                .then(result => dispatch(retrievedVideos(result)));
        },
        clearDetails: function() {
            console.log("clearDetails()");
            dispatch(clearVideos());
        }
    }
}

export default connect(mapStateToProps, mapActionToProps)(Player);