import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const avatarStyle = {
  width: 120,
  height: 120,
  margin: '0 auto 20px',
  perspective: 800,
};

const avatarInnerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #00f0ff, #0077ff)',
  boxShadow: '0 0 20px #00f0ff, inset 0 0 30px #00aaff',
  // animation: 'rotate3d 5s linear infinite', // stopped moving logo as requested
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: 48,
  userSelect: 'none',
  transformStyle: 'preserve-3d',
};

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    error: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    // Check localStorage users first
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] && users[username] === password) {
      this.props.onLogin();
    } else if (username === 'admin' && password === 'admin') {
      // fallback hardcoded admin login
      this.props.onLogin();
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0f2027', backgroundImage: 'linear-gradient(315deg, #0f2027 0%, #203a43 74%)' }}>
        <form onSubmit={this.handleSubmit} style={{ padding: 30, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 12, boxShadow: '0 0 30px #00f0ff', width: 320, color: '#00f0ff', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          <div style={avatarStyle}>
            <div style={avatarInnerStyle}>
              👨‍🎓
            </div>
          </div>
          <h2 style={{ textAlign: 'center', marginBottom: 20, color: '#00f0ff', textShadow: '0 0 10px #00f0ff' }}>Login</h2>
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: 6, color: '#00dfff' }}>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={this.handleChange}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: 'none', outline: 'none', background: 'rgba(255, 255, 255, 0.1)', color: '#00f0ff', fontSize: 16 }}
              required
              autoComplete="username"
            />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: 6, color: '#00dfff' }}>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: 'none', outline: 'none', background: 'rgba(255, 255, 255, 0.1)', color: '#00f0ff', fontSize: 16 }}
              required
              autoComplete="current-password"
            />
          </div>
          {error && <div style={{ color: '#ff4d4f', marginBottom: 15, textAlign: 'center' }}>{error}</div>}
          <button type="submit" style={{ width: '100%', padding: 12, background: '#00f0ff', border: 'none', borderRadius: 8, color: '#003366', fontWeight: 'bold', fontSize: 18, cursor: 'pointer', boxShadow: '0 0 15px #00f0ff' }}>
            Login
          </button>
          <div style={{ marginTop: 15, textAlign: 'center' }}>
            <Link to="/register" style={{ color: '#00f0ff', textDecoration: 'underline', fontSize: 14 }}>
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
