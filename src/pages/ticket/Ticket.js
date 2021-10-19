import React, { useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { MessageHistory } from "../../components/messageHistory/MessageHistory";
import { UpdateTicket } from "../../components/updateTicket/UpdateTicket";
import { getSingleTicket, closeTicket } from "../ticketList/ticketActions";
import { clearReplyMessage } from "../ticketList/ticketSlice";
// const ticket = tickets[0];

export const Ticket = () => {
  const dispatch = useDispatch();
  const { ticketid } = useParams();

  const { isLoading, error, selectedTicket, replyMessage, replyTicketError } =
    useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getSingleTicket(ticketid));

    return () => {
      (replyMessage || replyTicketError) && dispatch(clearReplyMessage());
    };
  }, [ticketid, dispatch, replyMessage, replyTicketError]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyMessage && <Alert variant="success">{replyMessage}</Alert>}
          {replyTicketError && (
            <Alert variant="danger">{replyTicketError}</Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {ticketid}
          <div className="subject">
            <strong>Subject:</strong> {selectedTicket.subject}
          </div>
          <div className="date">
            <strong>Create Date:</strong>{" "}
            {selectedTicket.createDate &&
              new Date(selectedTicket.createDate).toLocaleString()}
          </div>
          <div className="status">
            <strong>Status:</strong> {selectedTicket.status}
          </div>
        </Col>
        <Col className="text-end">
          <Button
            variant="outline-info"
            onClick={() => dispatch(closeTicket(ticketid))}
            disabled={selectedTicket.status === "Closed"}
          >
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {selectedTicket.conversations && (
            <MessageHistory messages={selectedTicket.conversations} />
          )}
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket _id={ticketid} />
        </Col>
      </Row>
    </Container>
  );
};
