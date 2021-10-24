import React, { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

import { verifyUser } from "../../api/userApi";

import "./verification.style.css";

const initialResponse = {
  status: "",
  message: "",
};

export const Verification = () => {
  const { _id, email } = useParams();
  const formData = { _id, email };

  const [response, setResponse] = useState(initialResponse);

  useEffect(() => {
    const apiCall = async () => {
      const result = await verifyUser(formData);
      setResponse(result);
    };

    !response.status && apiCall();
  }, [response]);

  // Call API to verify user ID

  return (
    <div className="verification-page">
      <div className="my-5">
        <div className="loginContainer rounded bg-white p-4">
          <h1>User Verfication</h1>
          {!response.status && <Spinner variant="primary" animation="border" />}
          {response.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
          {response.status === "success" && (
            <p>
              Welcome aboard! <Link to="/">Click here to log in.</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
