import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';

function App() {
  return (
    <div className="App">

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/register" element={<Register />} />



          </Routes>
        </Suspense>
      </Router>


    </div>
  );
}

export default App;
