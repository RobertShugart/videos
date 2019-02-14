import React from "react";
import VideoItem from "../components/VideoItem";

//Destructured props by usin ({ }) and putting videos inside
const VideoList = ({ videos }) => {
  videos.map(video => {
    return <VideoItem />;
  });
  return <div>{videos.length}</div>;
};

export default VideoList;
