// src/App.js
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { GOOGLE_CLIENT_ID } from './config/googleOAuth';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <div className="App">
          <Login />
          {/* <Navbar /> */}
        </div>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;