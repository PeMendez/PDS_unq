import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import '../styles/login.css';
import { register, login } from "../services/authQueries";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [key, setKey] = useState('login');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(formData); 
      setFormData({
        username: '',
        password: ''
      });
      setShowSuccessMessage(true);
      setShowModal(true);
      setKey('login')
    } catch (error) {
      console.error("Error durante el registro:", error);
      setShowSuccessMessage(false);
      setShowModal(true);      
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login(formData); 
      setFormData({
        username: '',
        password: ''
      });

      navigate("/")
    } catch (error) {
      setShowModalLogin(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowModal(false);
  };


  return (
    <div className='div home-page'>
      <div class="modal-dialog modal-sm">
        <Snackbar open={showModal} autoHideDuration={6000} onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key={'top center'}>
          <Alert onClose={handleClose} severity={showSuccessMessage ? 'success' : 'error'} variant="filled">
          {showSuccessMessage ? 
          <>
          User created successfully!<br />
          Please login.
          </>
          : '¡Username already exists, please try again!'}
          </Alert>
        </Snackbar>
      </div>
      <div class="modal-dialog modal-sm">
        <Snackbar open={showModalLogin} autoHideDuration={6000} onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        key={'top center'}>
          <Alert onClose={handleClose} severity='error' variant="filled">
            Error while logging in, please verify your data
          </Alert>
        </Snackbar>
      </div>
      <Card className='card-p'>
        <Card.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="login" title="Sign In">
              <Card.Title className="card-title">Welcome back!</Card.Title>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input type="text" 
                    id="usernameL" 
                    name="username" 
                    className="form-control"
                    required
                    onChange={handleChange}
                    value={formData.username} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input 
                  type="password" 
                  id="passwordL" 
                  name="password"
                  className="form-control" 
                  onChange={handleChange}
                  value={formData.password}
                  required />
                </div>
                <Button type="submit" variant="outline-dark" onClick={handleLogin}>Login</Button>
              </form>
            </Tab>
            <Tab eventKey="Create Account" title="Sign up">
            <Card.Title className="card-title">Create Account</Card.Title>
              <div>
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input 
                  type="text" 
                  id="usernameR" 
                  className="form-control" 
                  required 
                  name="username" 
                  onChange={handleChange}
                  value={formData.username}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="passwordR" className="form-control" required name="password" 
                  onChange={handleChange} value={formData.password}/>
                </div>
                <div className="form-group">
                <Button type="submit" variant="outline-dark" onClick={handleSubmit}>Submit</Button>
                </div>
              </form>
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginPage;
