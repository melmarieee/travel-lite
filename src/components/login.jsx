import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  const formStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
  };

  const formGroupStyle = {
    marginBottom: '15px', // Add margin to separate form groups
  };

  return (
    <Container style={{ paddingTop: '100px'}}>
      <Row className="align-items-center pt-5" >
        <Col className="text-center">
            <img src="your-logo.png" alt="Your Picture" width="100" height="100" />
        </Col>
        <Col>
          <Form style={formStyle}>
          <Col className="text-center" style={{ padding: '20px' }}>
            <a href="/">
          <img src="your-logo.png" alt="Your Logo" width="100" height="100" />
          </a>
        </Col>
        <div className='text-center'>
        <Label>Please login to your account</Label>
        </div>
            <FormGroup style={formGroupStyle}>
              <Input type="text" id="name" placeholder="Username" />
            </FormGroup>
            <FormGroup style={formGroupStyle}>
              <Input type="password" id="password" placeholder="Password" />
            </FormGroup>
            <div className="text-center" style={{padding: '50px'}}>
              <Button style={{ backgroundColor: '#ff8811'}}>Log in</Button>
              <br></br>
              <a href="/forgotpassword">
                <Label style={{ color:'darkgray', cursor: 'pointer'}}>Forgot password?</Label>
              </a>
              <br></br>
              </div>
              <div className='text-center'>
              <Label>Don't have an account? <Button style={{backgroundColor: '#ff8811'}} href="signup">Create New</Button></Label>
              </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
