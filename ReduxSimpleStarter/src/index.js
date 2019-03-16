import React from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import API_KEY from '../config_keys';


const YT_API_KEY = API_KEY;
YTsearch({key: YT_API_KEY, term: "Surfboard"}, function(data) {
    console.log(data);
})


const App = () => { 
    return(
        <div>
            
            <SearchBar />
            <VideoDetail />
            <VideoList />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));