import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        // No internal state, but bind 'this' to class methods
    }

    render() {
        return <main>
            <SearchBox />
            <SearchResults />
        </main>

    }
}

export default SearchPage