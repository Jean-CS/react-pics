import React, { Component } from 'react';
import { unsplash, URL_SEARCH_PHOTOS } from '../api/unsplash.js';

import SearchBar from './SearchBar';

class App extends Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get(URL_SEARCH_PHOTOS, {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
};

export default App