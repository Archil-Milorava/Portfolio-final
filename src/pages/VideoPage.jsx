import ReactPlayer from "react-player/lazy";

const videoUrl =
  "https://res.cloudinary.com/deijidv94/video/upload/v1749732131/1_a4updn.mp4";

const VideoPage = () => {
  return (
    <section className="md:pb-[2rem] w-full relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./videobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-[800px] aspect-[4/3]">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
