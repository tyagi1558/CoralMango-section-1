import React, { useState } from 'react';
import './styles.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'demo@coralmango.com' && password === 'demo123') {
      onLogin();
    } else {
      setError('Invalid Credentials!');
    }
  };

  return (
    <div className='login-container'>
      <h1 className=''>Login</h1>
      {error && <p>{error}</p>}
      <div>
        <label className="login-label" htmlFor="username" >Username:</label>
        <input className="login-input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label className="login-label" htmlFor="password">Password:</label>
        <input className="login-button"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button  className="login-button" type="submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
