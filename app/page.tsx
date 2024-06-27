"use client"

import React, { useState } from 'react';
import { FaUser, FaRobot } from 'react-icons/fa'; 

const Home: React.FC = () => {
  const [messageHistory, setMessageHistory] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const askTheAI = async () => {
    if (inputMessage.trim() === '') return;

    try {
      setIsButtonDisabled(true);

      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();

      setMessageHistory((prevHistory) => [
        ...prevHistory,
        `Usuario: ${inputMessage}`,
        `Chatgenius: ${data.response}`,
      ]);

      setInputMessage('');
    } catch (error) {
      console.error('Error making the API call:', error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full mx-auto p-6">
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md w-full">
          {messageHistory.map((message, index) => (
            <div
              key={index}
              className={`p-2 border rounded-md flex items-center ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
              }`}
            >
              {message.startsWith('Usuario:') ? (
                <FaUser className="text-blue-500 mr-2" /> // Ícone do usuário
              ) : (
                <FaRobot className="text-green-500 mr-2" /> // Ícone do chatbot
              )}
              <p>{message}</p>
            </div>
          ))}
        </div>

        <textarea
          className="w-full p-4 mb-4 rounded-lg shadow-md resize-none"
          rows={6}
          placeholder="Mensagem Chatgenius..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></textarea>

        <button
          className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={askTheAI}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? 'Processing...' : 'Bem-vindo ao ChatGenius. Como posso ajudar  hoje?'}
        </button>
        <button
          className="w-full px-6 py-3 mt-5 bg-gray-100 text-blue-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"
        
        >
          <a href="http://localhost:3000/home" className='border-2 border-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white-500
                    '>Registrar</a>
        </button>
        <p className='mt-5 text-center' >created by <span className='text-gr'>Joaquim Timoteo 👨🏽‍💻📲</span></p>
      </div>
    </div>
  );
};

export default Home;
