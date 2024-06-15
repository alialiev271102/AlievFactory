import React from 'react';
import YouTube from 'react-youtube';
import './YouTubePlayer.css';

interface YouTubePlayerProps {
    videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="youtube-player">
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

export default YouTubePlayer;
