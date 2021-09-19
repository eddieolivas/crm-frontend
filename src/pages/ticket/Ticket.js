import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb";
import tickets from "../../assets/data/dummy-ticket.json";
import { MessageHistory } from "../../components/messageHistory/MessageHistory";
import { UpdateTicket } from "../../components/updateTicket/UpdateTicket";
const ticket = tickets[0];

export const Ticket = () => {
  const [replyMessage, setReplyMessage] = useState("");

  useEffect(() => {}, [replyMessage]);

  const inputChangeHandler = (e) => {
    setReplyMessage(e.target.value);
  };

  // TODO: Connect submit to API.
  const replyMessageHandler = (e) => {
    e.preventDefault();

    setReplyMessage(e.target);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="subject">
            <strong>Subject:</strong> {ticket.subject}
          </div>
          <div className="date">
            <strong>Create Date:</strong> {ticket.createDate}
          </div>
          <div className="status">
            <strong>Status:</strong> {ticket.status}
          </div>
        </Col>
        <Col>
          <Button variant="outline-info" className="text-end">
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory messages={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            replyMessage={replyMessage}
            submitHandler={replyMessageHandler}
            inputChangeHandler={inputChangeHandler}
          />
        </Col>
      </Row>
    </Container>
  );
};
