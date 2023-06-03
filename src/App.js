import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import TablePage from './TablePage';
// import './styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/table" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/table" element={isLoggedIn ? <TablePage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
