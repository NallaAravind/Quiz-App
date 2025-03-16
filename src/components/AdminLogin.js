import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      sessionStorage.setItem('adminLoggedIn', true);
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4 text-primary">Admin Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={handleLogin} className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
