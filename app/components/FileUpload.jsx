import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPdfProcessed, setIsPdfProcessed] = useState(false);

  const onFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setIsPdfProcessed(false);
  };

  const onFileUpload = async () => {
    if (files.length === 0) {
      setMessage('Please select at least one PDF file');
      return;
    }

    setIsProcessing(true);
    setMessage('Processing PDFs...');

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('pdf_docs', file);
    });

    try {
      const response = await axios.post('https://docu-mind-backend.onrender.com/process_pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('PDFs processed successfully');
      setIsPdfProcessed(true);
    } catch (error) {
      setMessage(`PDF processing failed: ${error.response?.data?.detail || error.message}`);
      setIsPdfProcessed(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const onAskQuestion = async () => {
    if (!question) {
      setMessage('Please enter a question');
      return;
    }

    setIsProcessing(true);
    setMessage('Fetching answer...');

    try {
      const response = await axios.post('https://docu-mind-backend.onrender.com/answer_question', { user_question: question });
      setAnswer(response.data.answer);
      setMessage('');
    } catch (error) {
      setMessage(`Failed to get answer: ${error.response?.data?.detail || error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full h-full p-6 bg-white shadow-lg rounded-lg ">
      <h1 className=" text-3xl font-bold mb-8 text-center text-gray-800 ">PDF Chatbot</h1>
      
      <div className="mb-8 ">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Upload PDF Files</h2>
        <div className="flex items-center space-x-4">
          <label className="flex-1 flex items-center justify-center px-4 py-2 bg-white text-blue-500 rounded-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="ml-2 text-base leading-normal">Select PDFs</span>
            <input type="file" className="hidden" onChange={onFileChange} multiple accept=".pdf" disabled={isProcessing} />
          </label>
          <button 
            className={`px-4 py-2 rounded-lg text-white font-semibold ${isProcessing || files.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            onClick={onFileUpload} 
            disabled={isProcessing || files.length === 0}
          >
            {isProcessing ? 'Processing...' : 'Process PDFs'}
          </button>
        </div>
        {files.length > 0 && (
          <p className="mt-2 text-sm text-gray-600">{files.length} file(s) selected</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Ask a Question</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question"
            disabled={!isPdfProcessed || isProcessing}
            className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isPdfProcessed ? 'bg-gray-100' : ''}`}
          />
          <button 
            className={`px-4 py-2 rounded-lg text-white font-semibold ${!isPdfProcessed || isProcessing || !question ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
            onClick={onAskQuestion} 
            disabled={!isPdfProcessed || isProcessing || !question}
          >
            {isProcessing ? 'Fetching...' : 'Ask'}
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p>{message}</p>
        </div>
      )}

      {answer && (
        <div className="mb-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">Answer:</h3>
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
