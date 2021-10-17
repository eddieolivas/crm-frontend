import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { AddTicketForm } from "./AddTicketForm";

export const NewTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Add New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};
