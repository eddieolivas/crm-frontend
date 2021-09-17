import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

import { TicketTable } from '../../components/TicketTable/TicketTable';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/data/dummy-ticket.json';

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-end mt-5 mb-2">
          <Button className="bg-info" style={{ fontSize: '1.2rem', padding: '10px 30px' }}>
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
          <TicketTable 
            tickets={tickets}/>
        </Col>
      </Row>
    </Container>
  )
};
