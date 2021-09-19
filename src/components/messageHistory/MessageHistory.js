import React from "react";
import PropTypes from "prop-types";

import "./messageHistory.style.css";

export const MessageHistory = ({ messages }) => {
  if (!messages) return null;
  return messages.map((message, index) => (
    <div key={index} className="messageHistory mt-5">
      <div className="send">
        <div className="sender fw-bold">{message.sender}</div>
        <div className="date fw-bold">{message.date}</div>
      </div>
      <div className="message">{message.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  messages: PropTypes.array.isRequired,
};
