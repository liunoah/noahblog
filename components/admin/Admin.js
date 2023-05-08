import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // 执行登录逻辑
  };

  return (
    <div className='father'>
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome liunoah</h2>
        <div className="login-input-wrapper">
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="login-input-wrapper">
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
        <div className="login-links-wrapper">
          <a href="#" className="login-link">
            Forgot Password?
          </a>
          <a href="#" className="login-link">
            Sign Up
          </a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;