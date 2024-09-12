import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo, setResult, setLoading, setError } from '../features/video/videoSlice';
import VideoPreviewModal from './VideoPreviewModal';
import ErrorMessage from './ErrorMessage';

const UploadPage = () => {
  const dispatch = useDispatch();
  const { videoFile, previewUrl, result, isLoading, error } = useSelector((state) => state.video);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      dispatch(uploadVideo({ file }));
      setPreviewUrl(URL.createObjectURL(file));
      setIsModalOpen(true); // Ensure modal stays open with new file
      dispatch(setResult(null)); // Clear previous results
      dispatch(setLoading(true)); // Set loading state
    } else {
      dispatch(setError('Invalid file format. Please upload a video.'));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProcessVideo = () => {
    // Placeholder for future backend logic integration
    dispatch(setResult('Processing is not implemented yet.'));
    dispatch(setLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6">
      <h2 className="text-2xl text-white mb-4">Upload Your Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="mb-4 text-white"
      />
      {error && <ErrorMessage message={error} />}
      {videoFile && (
        <button
          onClick={handleProcessVideo}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Process Video
        </button>
      )}
      {isModalOpen && previewUrl && (
        <VideoPreviewModal previewUrl={previewUrl} onClose={handleCloseModal} />
      )}
      {result && <p className="text-white mt-4">{result}</p>}
      {isLoading && <p className="text-white mt-4">Processing...</p>}
    </div>
  );
};

export default UploadPage;
