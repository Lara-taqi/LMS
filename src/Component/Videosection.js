import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import "./stylee.css";
const VideoSection = () => {
  const [open, setopen] = useState(false);

  return (
    <section className='Videosection'>

      <div className="videoCover"></div>

      <div className="Video">
        <div className="video-area">
          <button className="Startvideo" onClick={() => setopen(true)}>
            <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="0KYxN1kJSb0"
        onClose={() => setopen(false)}
      />
    </section>
  );
};

export default VideoSection;
