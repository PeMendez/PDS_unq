import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import './login.css';

const LoginPage = () => {
  const [key, setKey] = useState('login');

  return (
    <div className='div'>
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
                  <input type="text" id="username" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" className="form-control" required />
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
                  <input type="text" id="username" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" className="form-control" required />
                </div>
                <div className="form-group">
                <Button type="submit" variant="outline-dark">Submit</Button>
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
