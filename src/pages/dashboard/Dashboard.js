import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { TicketTable } from "../../components/TicketTable/TicketTable";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { fetchAllTickets } from "../ticketList/ticketActions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [dispatch, tickets.length]);

  const pendingTickets = tickets.filter((ticket) => ticket.status !== "Closed");
  const totalTickets = tickets.length;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-end mt-5 mb-2">
          <Link to="/new-ticket">
            <Button className="bg-info">Add New Ticket</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: {totalTickets}</div>
          <div>Pending tickets: {pendingTickets.length}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 mb-2">Recently added tickets</Col>
      </Row>
      <Row>
        <Col className="recentTickets">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
