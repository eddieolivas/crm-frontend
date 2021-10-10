import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { fetchAllTickets } from "./ticketActions";

import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { TicketTable } from "../../components/TicketTable/TicketTable";

export const TicketList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Tickets" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/new-ticket">
            <Button className="bg-info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
