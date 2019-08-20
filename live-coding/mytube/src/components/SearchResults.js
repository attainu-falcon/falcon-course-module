import React from 'react';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        // No internal state, but bind 'this' to class methods
    }

    render() {
        return <div className="container-fluid">SearchResults</div> 

    }
}


// mapStateToProps({listofVideos: []})
export default SearchResults