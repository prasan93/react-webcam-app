import React, { useRef, useEffect } from 'react';

function Webcam() {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };

    async function enableWebcam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    }

    enableWebcam();

    return () => {
      if (videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h1>Webcam Stream</h1>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
}

export default Webcam;
