import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file if you use custom styles
import logo from './images/logo.jpg'; // Path to your logo image

// Home Component
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 pt-20">
      <header className="flex items-center w-full py-4">
        <h1 className="text-6xl font-bold text-yellow-500 text-center mx-auto">DeepFakeDetector</h1>
      </header>
      <p className="text-white text-lg mb-6 leading-relaxed tracking-wide bg-gray-900 p-6 rounded-lg shadow-lg">
  The primary goal of <span className="font-semibold text-yellow-400">DeepFakeDetector</span> is to provide an effective solution for detecting manipulated or forged videos. With the rapid advancement of deepfake technology, creating highly realistic yet fabricated videos has become alarmingly easy. These deepfakes can spread misinformation, manipulate public opinion, and deceive audiences, compromising the integrity of video content and making it harder to distinguish between genuine and fake footage.
  <br /><br />
  This tool is designed to address these challenges by offering users the means to verify the authenticity of video content. Whether used by journalists, researchers, or the general public, it aims to ensure that video information remains trustworthy and accurate. By empowering users to detect and expose deepfakes, it plays a crucial role in combating misinformation and digital deception.
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
      setIsModalOpen(true); // Open the modal
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
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
  Upload Your Video
</h1>

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
function Report() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6 text-white">
      <h2 className="text-2xl mb-4">Report Cyberpolice</h2>
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
      <header className="navbar bg-black text-white p-4">
        <img src={logo} alt="Logo" className="w-16 h-16 inline" />
        <nav className="inline ml-4">
          <Link to="/" className="text-white mx-2 hover:underline">Home</Link>
          <Link to="/contact" className="text-white mx-2 hover:underline">Contact</Link>
          <Link to="/report" className="text-white mx-2 hover:underline">Report </Link>
          <Link to="/thesis" className="text-white mx-2 hover:underline">Thesis</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<Report />} />
          <Route path="/thesis" element={<Thesis />} />
        </Routes>
      </main>
      <footer className="bg-black text-white p-6">
  <div className="container mx-auto flex flex-wrap">
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
      <p>Email: <a href="mailto:cyberpolice@example.com" className="underline">cyberpolice@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890" className="underline">+123 456 7890</a></p>
    </div>

    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <h3 className="text-xl font-semibold mb-2">Report Cyberpolice</h3>
      <p>If you have any concerns or feedback about Cyberpolice, please contact us via the provided email or phone number.</p>
    </div>

    <div className="w-full md:w-1/3 flex justify-end">
      <div>
        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
        <ul className="list-none">
          <li><a href="/terms-of-use" className="underline">Terms of Use</a></li>
          <li><a href="/privacy-policy" className="underline">Privacy Policy</a></li>
          <li><a href="/helpline" className="underline">Helpline</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
    <p>&copy; {new Date().getFullYear()} DeepFakeDetector. All rights reserved.</p>
  </div>
</footer>


    </Router>
  );
}



export default App;
