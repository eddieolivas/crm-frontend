import React, { useState, useEffect } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccessMessage } from "./addTicketSlice";
// import PropTypes from "prop-types";

import { addNewTicket } from "./addTicketActions";

import { shortText } from "../../utils/validation";
import "./addTicketForm.style.css";

const initialFormData = {
  subject: "",
  createDate: "",
  message: "",
};

const initialFormError = {
  subject: false,
  createDate: false,
  message: false,
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);

  const { isLoading, error, successMessage } = useSelector(
    (state) => state.newTicket
  );

  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormError);

  useEffect(() => {
    return () => {
      dispatch(clearSuccessMessage());
    };
  }, [formData, formDataError, dispatch]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addTicketHandler = async (e) => {
    e.preventDefault();

    setFormDataError(initialFormError);

    const isValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isValid,
    });

    dispatch(addNewTicket({ ...formData, sender: name }));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">Add New Ticket</h1>
          <hr />
          <div>
            {error && <Alert variant="danger">{error}</Alert>}
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
            {isLoading && <Spinner variant="primary" animation="border" />}
          </div>
          <Form
            autoComplete="off"
            onSubmit={addTicketHandler}
            className="addTicketForm mt-5 rounded"
          >
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                onChange={onChangeHandler}
                value={formData.subject}
                placeholder="Enter a subject"
                required
                maxLength="100"
              />
              <Form.Text className="text-danger">
                {formDataError.subject && "Subject is required"}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label column sm={3}>
                Issue Date
              </Form.Label>
              <Form.Control
                type="date"
                name="createDate"
                onChange={onChangeHandler}
                value={formData.createDate}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Issue Details</Form.Label>
              <Form.Control
                as="textarea"
                type="date"
                name="message"
                rows="5"
                onChange={onChangeHandler}
                value={formData.message}
                placeholder="Describe the issue."
                required
              />
            </Form.Group>
            <Button className="bg-info" block type="submit">
              Submit Ticket
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

// AddTicketForm.propTypes = {
//   formData: PropTypes.object.isRequired,
//   onChangeHandler: PropTypes.func.isRequired,
//   addTicketHandler: PropTypes.func.isRequired,
// };
