import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import '../styles/login.css';
import { register } from "../services/authQueries";

const LoginPage = () => {
  const [key, setKey] = useState('login');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await register(formData); 
      console.log("Registro exitoso:", response);
      
    } catch (error) {
      console.error("Error durante el registro:", error);
      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <div className='div home-page'>
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
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input 
                  type="password" 
                  id="passwordL" 
                  name="password"
                  className="form-control" 
                  onChange={handleChange}
                  required />
                </div>
                <Button type="submit" variant="outline-dark">Login</Button>
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
                  />
                </div>
                {/*<div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" className="form-control" required />
                </div>*/}
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="passwordR" className="form-control" required name="password" 
                  onChange={handleChange}/>
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
