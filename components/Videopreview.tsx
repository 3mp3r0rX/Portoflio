import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const VideoPreview = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <video
        ref={videoRef}
        src="/5sec.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
      />
    </div>
  );
};

export default VideoPreview;
