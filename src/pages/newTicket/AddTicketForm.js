import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './addTicketForm.style.css';

export const AddTicketForm = ({formData, onChangeHandler, addTicketHandler, formDataError}) => {
  console.log(formData);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">Add New Ticket</h1>
          <hr />
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
                maxLength="100" />
              <Form.Text className="text-danger">{formDataError.subject && "Subject is required"}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label column sm={3}>Issue Date</Form.Label>
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
                name="details"
                rows="5"
                onChange={onChangeHandler}
                value={formData.details}
                placeholder="Describe the issue."
                required />
            </Form.Group>
            <Button variant="info" block type="submit">
              Submit Ticket
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

AddTicketForm.propTypes = {
  formData: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  addTicketHandler: PropTypes.func.isRequired
}