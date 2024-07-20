import React from 'react';
import './VideoPlayer.css';

interface VideoPlayerProps {
    videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
    return (
        <div className="video-player">
            <video width="640" height="390" controls>
                <source src={videoSrc} type="video/mp4" />
                Ваш браузер не поддерживает видео тег.
            </video>
        </div>
    );
};

export default VideoPlayer;
