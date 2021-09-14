import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Login = ({ inputChangeHandler, email, password, onSubmitHandler }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          <Form
            autoComplete="off"
            onSubmit={onSubmitHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email"
                name="email"
                onChange={inputChangeHandler}
                value={email}
                placeholder="Enter email"
                required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                name="password"
                onChange={inputChangeHandler}
                value={password}
                placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

Login.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}