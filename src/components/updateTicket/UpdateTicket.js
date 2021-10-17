import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { replyTicket } from "../../pages/ticketList/ticketActions";

export const UpdateTicket = ({ _id }) => {
  const dispatch = useDispatch();

  const {
    user: { name },
  } = useSelector((state) => state.user);

  const [reply, setReplyMessage] = useState("");

  const inputChangeHandler = (e) => {
    setReplyMessage(e.target.value);
  };

  // TODO: Connect submit to API.
  const replyMessageHandler = (e) => {
    e.preventDefault();

    const messageObject = {
      sender: name,
      message: reply,
    };

    dispatch(replyTicket(_id, messageObject));
    setReplyMessage("");
  };

  return (
    <div>
      <Form onSubmit={replyMessageHandler}>
        <Form.Label>Reply</Form.Label>
        <br />
        <Form.Text>Please reply or update your ticket here.</Form.Text>
        <Form.Control
          name="details"
          rows="5"
          as="textarea"
          className="mb-3"
          onChange={inputChangeHandler}
          value={reply}
        />
        <div className="text-end">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
};

UpdateTicket.propTypes = {
  _id: PropTypes.string.isRequired,
};
