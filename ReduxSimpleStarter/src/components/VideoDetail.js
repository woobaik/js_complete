import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return(
            <div>Loading!</div>
        )
    }

    const videoId = video.id.videoId;
    
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe width="560" 
                        height="315" 
                        src={"https://www.youtube.com/embed/" + videoId}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>
            <div className="details">
                <div> { video.snippet.title } </div>
                <div> {video.snippet.description} </div>
            </div>
        </div>
    );
};

export default VideoDetail;   