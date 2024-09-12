// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo, setLoading, resetState } from '../features/video/videoSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videoFile = useSelector((state) => state.video.videoFile);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    dispatch(resetState()); // Reset the state on component mount
  }, [dispatch]);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    const validVideoTypes = ['video/mp4', 'video/avi', 'video/mkv', 'video/mov'];

    if (file && validVideoTypes.includes(file.type)) {
      dispatch(uploadVideo(file));
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid file format. Please upload a video file.');
    }
  };

  const handleSubmit = () => {
    if (!videoFile) {
      setErrorMessage('Please upload a valid video file before processing.');
      return;
    }
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      navigate('/result');
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Video Forgery Detection</h1>
      <input type="file" onChange={handleVideoUpload} className="mb-4" />
      {errorMessage && (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      )}
      {videoFile && (
        <video
          controls
          src={URL.createObjectURL(videoFile)}
          className="w-96 h-56 mb-4"
        />
      )}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Process Video
      </button>
    </div>
  );
};

export default Home;
