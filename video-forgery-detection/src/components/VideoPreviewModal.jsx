import React from 'react';
import ReactDOM from 'react-dom';

const VideoPreviewModal = ({ previewUrl, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded max-w-lg w-full">
        <button onClick={onClose} className="text-red-500 float-right">Close</button>
        <div className="relative pt-3/4">
          <video src={previewUrl} controls className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoPreviewModal;
