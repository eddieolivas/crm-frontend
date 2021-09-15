import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

import { TicketTable } from '../../components/TicketTable/TicketTable';

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button className="bg-info" style={{ fontSize: '1.5rem', padding: '10px 30px' }}>
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-2">
          Recently added tickets
        </Col>
      </Row>
      <Row>
        <Col className="recentTickets">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  )
};
