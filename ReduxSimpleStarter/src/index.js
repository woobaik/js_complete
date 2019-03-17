import React, { Component }from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import API_KEY from '../config_keys';


const YT_API_KEY = API_KEY;

class App extends Component { 
    constructor() {
        super()
        this.state = { videos : [],
                       selectedVideo: null };
        YTsearch({key: YT_API_KEY, term: "Surfboard"}, (videos) => {
            this.setState({ videos })
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={ this.state.videos[0] } />
                <VideoList />
                {console.log(this.state.videos)}
                
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('.container'));