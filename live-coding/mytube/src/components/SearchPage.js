import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

class SearchPage extends React.Component {
    render() {
        return <main>
            <SearchBox />
            <SearchResults />
        </main>

    }
}

export default SearchPage;