import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailVerification from './pages/email-verification';
import ResetPassword from './pages/reset-password';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App