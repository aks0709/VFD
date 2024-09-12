import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const result = useSelector((state) => state.video.result);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Video Analysis Result</h1>
      <p className="text-2xl">
        {result ? 'The video is forged.' : 'The video is not forged.'}
      </p>
    </div>
  );
};

export default Result;