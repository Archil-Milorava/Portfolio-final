import React from "react";
import ReactPlayer from "react-player/lazy";

const video =
  "https://res.cloudinary.com/deijidv94/video/upload/v1745767176/0427_1_ajvh35.mp4";

const VideoPage = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./videobg.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />

      {/* Styled Main Video */}
      <div className="relative z-10 flex items-center justify-center h-full ">
        <ReactPlayer url={video} width="900px" height="600px" controls />
      </div>
    </section>
  );
};

export default VideoPage;
