import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import { loginPending, loginFailed, loginSuccess } from "./loginSlice";
import { userLogin } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const Login = ({ formSwitcher }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  useEffect(() => {
    sessionStorage.getItem("accessJWT") && history.push("/dashboard");
  }, [history, isAuth]);

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

  const onLoginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please fill in an email and password.");
    }

    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.status === "error") {
        return dispatch(loginFailed(isAuth.message));
      }

      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFailed(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
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
            {isLoading && (
              <Spinner
                style={{ marginLeft: "20px" }}
                variant="primary"
                animation="border"
              />
            )}
            <hr />
            <a href="#!" onClick={() => formSwitcher("reset")}>
              Forgot Your Password?
            </a>
            <br />
            <p className="py-4">
              Are you new here? <Link to="/registration">Register Now</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};
