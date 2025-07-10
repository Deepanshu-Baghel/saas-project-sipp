import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '', success: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
      return;
    }
    if (!username || !password) {
      this.setState({ error: 'Please fill all fields' });
      return;
    }
    // Save user to localStorage
    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      this.setState({ error: 'Username already exists' });
      return;
    }
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    this.setState({ success: 'Registration successful! You can now login.', username: '', password: '', confirmPassword: '' });
  };

  render() {
    const { username, password, confirmPassword, error, success } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0f2027', backgroundImage: 'linear-gradient(315deg, #0f2027 0%, #203a43 74%)' }}>
        <form onSubmit={this.handleSubmit} style={{ padding: 30, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 12, boxShadow: '0 0 30px #00f0ff', width: 320, color: '#00f0ff', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          <h2 style={{ textAlign: 'center', marginBottom: 20, color: '#00f0ff', textShadow: '0 0 10px #00f0ff' }}>Register</h2>
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
              autoComplete="new-password"
            />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: 6, color: '#00dfff' }}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: 'none', outline: 'none', background: 'rgba(255, 255, 255, 0.1)', color: '#00f0ff', fontSize: 16 }}
              required
              autoComplete="new-password"
            />
          </div>
          {error && <div style={{ color: '#ff4d4f', marginBottom: 15, textAlign: 'center' }}>{error}</div>}
          {success && <div style={{ color: '#4caf50', marginBottom: 15, textAlign: 'center' }}>{success}</div>}
          <button type="submit" style={{ width: '100%', padding: 12, background: '#00f0ff', border: 'none', borderRadius: 8, color: '#003366', fontWeight: 'bold', fontSize: 18, cursor: 'pointer', boxShadow: '0 0 15px #00f0ff' }}>
            Register
          </button>
          <div style={{ marginTop: 15, textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => this.props.history.push('/')}
              style={{
                background: 'none',
                border: 'none',
                color: '#00f0ff',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: 14,
                marginTop: 10,
              }}
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
