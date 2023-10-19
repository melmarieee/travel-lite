import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import picture from '../assets/login-picture.png';
import companylogo from '../assets/pasabay-orange-logo.png';
import '../css/login.css';
function Login() {

  // Styles
  const formStyle = {
    padding: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  // Validation Forms
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isButtonDisabled, setButtonDisabled] = useState(true);

  // Sample User
  const predefinedUserData = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    // Add more user objects as needed
  ];

  // Validation Checks and Local Storage
  const handleLogin = (e) => {
    e.preventDefault();
  
    let emailIsValid = true;
    let passwordIsValid = true;
  
    if (email.trim() === '') {
      setEmailError('Email is required');
      emailIsValid = false;
    } else {
      setEmailError('');
    }
  
    if (password.trim() === '') {
      setPasswordError('Password is required');
      passwordIsValid = false;
    } else {
      setPasswordError('');
    }
  
    if (emailIsValid && passwordIsValid) {
      const user = predefinedUserData.find((userData) => userData.email === email);
  
      if (user) {
        if (user.password === password) {
          // Successful login
          // You can redirect the user to a dashboard or another page
          window.location.href = '/carpool';
        } else {
          // Password is incorrect
          setPasswordError('Incorrect password');
        }
      } else {
        // Email is incorrect
        setEmailError('Incorrect email');
      }
    }
  };

    // Enable the login button only when both email and password are provided
    useEffect(() => {
      setButtonDisabled(!(email.trim() && password.trim()));
    }, [email, password]);

  return (
    <Container style={{ paddingTop: '100px' }}>
      <Row className="align-items-center">
        <Col className="text-center">
          <img id="picture-login" src={picture} alt="Your Picture" className="img-fluid" />
        </Col>

        <Col>
          <Form style={formStyle} onSubmit={handleLogin}>
            <Col className="text-center" style={{ padding: '20px' }}>
              <a href="/">
                <img src={companylogo} alt="Your Logo" width="350" />
              </a>
            </Col>

            <div className='text-center'>
              <Label style={{ fontFamily: 'Manrope', fontWeight: '600' }}>Please login to your account</Label>
            </div>

            <FormGroup style={formGroupStyle}>
              <Input type="text" id="name" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
              {emailError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{emailError}</div>}
            </FormGroup>

            <FormGroup style={formGroupStyle}>
              <Input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
              {passwordError && <div style={{ fontSize: '12px', width: '100%', color: 'red' }}>{passwordError}</div>}
            </FormGroup>

            <div className="text-center" style={{ padding: '50px' }}>
              <Button style={{ backgroundColor: '#ff8811' }}  disabled={isButtonDisabled} >Log in</Button>
              <br />
              <a href="/forgotpassword">
                <Label style={{ color: 'darkgray', cursor: 'pointer', fontFamily: 'Manrope', fontWeight: '400' }}>Forgot password?</Label>
              </a>
              <br />
            </div>

            <div className='text-center'>
              <Label style={{ fontFamily: 'Manrope', fontWeight: '600' }}>Don't have an account? <a href="/signup" style={{ textDecoration: 'none', color: '#ff8811' }}>Create New</a></Label>
            </div>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
