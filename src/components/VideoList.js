import React from "react";
import VideoItem from "../components/VideoItem";

//Destructured props by usin ({ }) and putting videos inside
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
