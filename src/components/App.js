import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

const apiUrl = 'https://api.unsplash.com/search/photos';
const accessKey = 'ab7b90693ac78426bb919a3981e14b67de4b4db887cf1472fedb47c8676f1cea';

class App extends Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: 'Client-ID ' + accessKey,
            },
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