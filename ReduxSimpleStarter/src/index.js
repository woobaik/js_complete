import React from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import API_KEY from '../config_keys';

const YT_API_KEY = API_KEY;
console.log(YT_API_KEY);

const App = () => { 
    return(
        <div>
            {console.log(API_KEY)}
            <SearchBar />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));