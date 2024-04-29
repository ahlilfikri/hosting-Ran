/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './loginregister.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  sessionStorage.removeItem('token');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3700/user/login', formData);
      const { token } = res.data;

      sessionStorage.setItem('token', token);

      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* linear gradient */}
      <div className="container-fluid cover-login-register" style={{ width: '100vw', height: '100vh' }}>
        <div className="row " style={{ height: '100%' }}>
          <div className="col-6 m-auto ">
            <h1 style={{ color: 'white' }}>Welcome !</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nulla dignissimos accusantium laborum dolor facilis!</p>
          </div>
          <div className="col-6 ">

            <div className="box-login-db bg-light" style={{
              maxWidth: '500px',
              height: '480px',
              padding: '20px',
              paddingTop: '53px',
              borderRadius: '30px',
              margin: 'auto',
              marginTop: '200px',
            }}>
              <div className="ps-5">
                <h3>Login</h3>

                <form onSubmit={handleLogin}>
                  <div className="form-group mt-5 pb-3 " style={{ width: '320px' }}>
                    <label htmlFor="exampleInputUsername">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" style={{ borderRadius: '30px' }} name="username" value={formData.username} onChange={handleInputChange} />
                  </div>
                  <div className="form-group pb-5" style={{ width: '320px' }}>
                    <label htmlFor="exampleInputPassword">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" style={{ borderRadius: '30px' }} name="password" value={formData.password} onChange={handleInputChange} />
                  </div>
                  <div className="row justify-content-center">
                    <button type="submit" className="btn btn-primary" style={{ width: '100px' }}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
