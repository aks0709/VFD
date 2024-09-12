import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file if you use custom styles
import logo from './images/logo.jpg'; // Path to your logo image

// Home Component
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6">
      <header className="flex items-center w-full py-4">
       
        <h1 className="text-4xl text-white mx-auto">DeepFakeDetector</h1>
      </header>
      <p className="text-white text-lg mb-4">The primary goal of DeepFakeDetector is to provide an effective solution for detecting manipulated or forged videos.
         With the increasing prevalence of deepfake technology, which can create highly realistic but fake videos, 
         the need for reliable detection tools has never been more critical.
          The project aims to empower users to verify the authenticity of video content,
         thereby contributing to the fight against misinformation and video-based deception
      </p>
      <Link to="/upload" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Get Started
      </Link>
    </div>
  );
}

// UploadPage Component
function UploadPage() {
  const [file, setFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
      setIsModalOpen(true);
    } else {
      setError('Invalid file format. Please upload a video.');
    }
  };

  const handleProcessVideo = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate backend processing
      setResult('Video is forged'); // Replace with actual backend response
      setIsLoading(false);
    }, 2000);
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
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {file && (
        <button
          onClick={handleProcessVideo}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Process Video
        </button>
      )}
      {isModalOpen && previewUrl && (
        <VideoPreviewModal previewUrl={previewUrl} onClose={() => setIsModalOpen(false)} />
      )}
      {result && <p className="text-white mt-4">{result}</p>}
      {isLoading && <p className="text-white mt-4">Processing...</p>}
    </div>
  );
}

// VideoPreviewModal Component
function VideoPreviewModal({ previewUrl, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded">
        <button onClick={onClose} className="text-red-500 float-right">Close</button>
        <video src={previewUrl} controls className="w-full h-auto mt-2" />
      </div>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 text-white">
      <h2 className="text-2xl mb-4">Contact Us</h2>
      <p>Email: <a href="mailto:cyberpolice@example.com" className="underline">cyberpolice@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890" className="underline">+123 456 7890</a></p>
    </div>
  );
}

// ReportReview Component
function ReportReview() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 text-white">
      <h2 className="text-2xl mb-4">Report Cyberpolice Review</h2>
      <p>If you have any concerns or feedback about Cyberpolice, please contact us via the provided email or phone number.</p>
    </div>
  );
}

// Thesis Component
function Thesis() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 text-white">
      <h2 className="text-2xl mb-4">Thesis</h2>
      <p>Information about the project thesis.</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <header className="navbar bg-gray-900 text-white p-4">
        <img src={logo} alt="Logo" className="w-16 h-16 inline" />
        <nav className="inline ml-4">
          <Link to="/" className="text-white mx-2 hover:underline">Home</Link>
          <Link to="/contact" className="text-white mx-2 hover:underline">Contact</Link>
          <Link to="/report" className="text-white mx-2 hover:underline">Report Review</Link>
          <Link to="/thesis" className="text-white mx-2 hover:underline">Thesis</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<ReportReview />} />
          <Route path="/thesis" element={<Thesis />} />
        </Routes>
      </main>
      <footer className="footer bg-gray-900 text-white p-4">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:cyberpolice@example.com" className="underline">cyberpolice@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="underline">+123 456 7890</a></p>
          </div>
          <div className="footer-section">
            <h3>Report Cyberpolice Review</h3>
            <p>If you have any concerns or feedback about Cyberpolice, please contact us via the provided email or phone number.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
