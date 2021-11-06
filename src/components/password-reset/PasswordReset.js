import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { passwordResetAction } from "./passwordResetActions";
import { clearPasswordResetMessage } from "./passwordResetSlice";

export const PasswordReset = () => {
  const dispatch = useDispatch();

  const { status, message, isLoading } = useSelector(
    (state) => state.passwordReset
  );

  const [email, setEmail] = useState("");

  useEffect(() => {
    return () => {
      (message || status) && dispatch(clearPasswordResetMessage());
    };
  }, [dispatch, message, status]);

  const inputChangeHandler = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const onResetHandler = (e) => {
    e.preventDefault();
    dispatch(passwordResetAction(email));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Reset Your Password</h1>
          <hr />
          {(status || message) && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}

          <Form autoComplete="off" onSubmit={onResetHandler}>
            {status !== "success" && (
              <>
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
              </>
            )}
            {isLoading && (
              <Spinner
                variant="primary"
                animation="border"
                style={{ marginLeft: "15px" }}
              />
            )}
            <hr />
            <Link to="/">&lt;&lt; Back to Log In</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
