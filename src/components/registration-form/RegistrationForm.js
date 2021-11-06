import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import { clearRegistrationMessage } from "./registrationSlice";
import { userRegistration } from "./registrationActions";

const initialState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  address: "",
  password: "",
  confirmPassword: "",
};

const passwordVerification = {
  minLength: false,
  uppercase: false,
  lowercase: false,
  hasNumber: false,
  specialChar: false,
  passwordsMatch: false,
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { status, message, isLoading } = useSelector(
    (state) => state.registration
  );

  const [formData, setFormData] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passwordVerification);

  useEffect(() => {
    return () => {
      (message || status) && dispatch(clearRegistrationMessage());
    };
  }, [formData, dispatch, message, status]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      const minLength = value.length > 8;
      const uppercase = /[A-Z]/.test(value);
      const lowercase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const specialChar = /[!,@,#,$,%,^,&,*,(,),+,<,>,{,}]/.test(value);

      setPasswordError({
        ...passwordError,
        minLength,
        uppercase,
        lowercase,
        hasNumber,
        specialChar,
      });
    }

    if (name === "confirmPassword") {
      setPasswordError({
        ...passwordError,
        passwordsMatch: value === formData.password,
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { name, phone, email, company, address, password } = formData;
    const registrationData = {
      name,
      phone,
      email,
      company,
      address,
      password,
    };

    dispatch(userRegistration(registrationData));
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>User Registration</h1>
          <hr />
          {(status || message) && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}

          {status !== "success" && (
            <Form autoComplete="off" onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={inputChangeHandler}
                  value={formData.name}
                  placeholder="Enter name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  onChange={inputChangeHandler}
                  value={formData.phone}
                  placeholder="Enter phone number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={inputChangeHandler}
                  value={formData.email}
                  placeholder="Enter email address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  onChange={inputChangeHandler}
                  value={formData.company}
                  placeholder="Enter company name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  onChange={inputChangeHandler}
                  value={formData.address}
                  placeholder="Enter street address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={inputChangeHandler}
                  value={formData.password}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onChange={inputChangeHandler}
                  value={formData.confirmPassword}
                  placeholder="Confirm password"
                  required
                />
              </Form.Group>
              <Form.Text>
                {!passwordError.passwordsMatch && (
                  <div className="text-danger mb-3">Passwords must match.</div>
                )}
              </Form.Text>
              <ul>
                <li
                  className={
                    passwordError.minLength ? "text-success" : "text-danger"
                  }
                >
                  Min 8 characters
                </li>
                <li
                  className={
                    passwordError.passwordsMatch
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  At least one upper case letter
                </li>
                <li
                  className={
                    passwordError.lowercase ? "text-success" : "text-danger"
                  }
                >
                  At least one lower case letter
                </li>
                <li
                  className={
                    passwordError.hasNumber ? "text-success" : "text-danger"
                  }
                >
                  At least one number
                </li>
                <li
                  className={
                    passwordError.specialChar ? "text-success" : "text-danger"
                  }
                >
                  At least one special character (i.e. @ * # $ %)
                </li>
              </ul>
              <Button
                variant="primary"
                type="submit"
                disabled={Object.values(passwordError).includes(false)}
              >
                Register
              </Button>
              {isLoading && (
                <Spinner
                  variant="primary"
                  animation="border"
                  style={{ marginLeft: "15px" }}
                />
              )}
            </Form>
          )}
          <hr />
          <p className="py-4">
            Already have an account? <Link to="/">Log In</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
