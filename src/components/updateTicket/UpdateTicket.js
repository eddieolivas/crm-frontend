import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const UpdateTicket = ({
  submitHandler,
  inputChangeHandler,
  replyMessage,
}) => {
  return (
    <Form onSubmit={submitHandler}>
      <Form.Label>Reply</Form.Label>
      <br />
      <Form.Text>Please reply or update your ticket here.</Form.Text>
      <Form.Control
        name="details"
        rows="5"
        as="textarea"
        className="mb-3"
        onChange={inputChangeHandler}
        value={replyMessage}
      />
      <div className="text-end">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  replyMessage: PropTypes.string.isRequired,
};
