import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({ formSwitcher }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A function to set up two way binding for inputs in our form
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onLoginHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill in an email and password.");
    }

    //TODO call API to submit the form
    console.log(email, password);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={onLoginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={inputChangeHandler}
                value={email}
                placeholder="Enter email"
                required
              />
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
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
            <hr />
            <a href="#!" onClick={() => formSwitcher("reset")}>
              Forgot Your Password?
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};
