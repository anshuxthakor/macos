import { useEffect, useRef, useState } from "react";
import "./camera.scss";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  const [capturing, setCapturing] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        streamRef.current = stream;
        videoRef.current.srcObject = stream;
      });

    return () => {
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, []);
  

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    const photos = JSON.parse(localStorage.getItem("photos")) || [];
    photos.push({
      id: Date.now(),
      src: image,
    });

    localStorage.setItem("photos", JSON.stringify(photos));
    window.dispatchEvent(new Event("photos-updated"));


    // ⚡ visual feedback
    setCapturing(true);
    setTimeout(() => setCapturing(false), 150);
  };

  return (
    <div className={`camera-app ${capturing ? "capturing" : ""}`}>
      <video ref={videoRef} autoPlay playsInline muted />
      <canvas ref={canvasRef} hidden />

      <button
        className="capture-btn"
        onClick={capturePhoto}
        aria-label="Capture photo"
      />
    </div>
  );
};

export default Camera;
