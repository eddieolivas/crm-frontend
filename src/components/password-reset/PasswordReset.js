import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PasswordReset = ({
  inputChangeHandler,
  email,
  onResetHandler,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Reset Your Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={onResetHandler}>
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
            </Form.Group>

            <Button variant="primary" type="submit">
              Reset Password
            </Button>
            <hr />
            <Link to="/">&lt;&lt; Back to Log In</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

PasswordReset.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
  onResetHandler: PropTypes.func.isRequired,
};
