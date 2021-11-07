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

import { updatePasswordAction } from "../../components/password-reset/passwordResetActions";
import { clearPasswordResetMessage } from "../../components/password-reset/passwordResetSlice";

const initialState = {
  pin: "",
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

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const { status, message, isLoading, email } = useSelector(
    (state) => state.passwordReset
  );

  const [formData, setFormData] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passwordVerification);

  useEffect(() => {
    return () => {
      (message || status) && dispatch(clearPasswordResetMessage());
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

    const { pin, password } = formData;
    const newPasswordData = {
      pin,
      password,
      email,
    };

    dispatch(updatePasswordAction(newPasswordData));
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Reset Password</h1>
          <hr />
          {(status || message) && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}

          <Form autoComplete="off" onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Password Reset Pin</Form.Label>
              <Form.Control
                type="number"
                name="pin"
                onChange={inputChangeHandler}
                value={formData.pin}
                placeholder="Enter password pin"
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
                  passwordError.passwordsMatch ? "text-success" : "text-danger"
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
              Reset Password
            </Button>
            {isLoading && (
              <Spinner
                variant="primary"
                animation="border"
                style={{ marginLeft: "15px" }}
              />
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordForm;
