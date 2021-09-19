import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { TicketTable } from "../../components/TicketTable/TicketTable";
import tickets from "../../assets/data/dummy-ticket.json";

export const TicketList = () => {
  const [searchString, setSearchString] = useState("");
  const [filteredTickets, setDisplayTicket] = useState(tickets);

  useEffect(() => {}, [searchString, filteredTickets]);

  // Sets up two-way binding for the search form
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setSearchString(value);
    searchTickets(value);
  };

  // Filter tickets by subject based on search input content
  const searchTickets = (search) => {
    const filtered = tickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(search.toLowerCase())
    );

    setDisplayTicket(filtered);
  };

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
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm
            onChangeHandler={onChangeHandler}
            searchString={searchString}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={filteredTickets} />
        </Col>
      </Row>
    </Container>
  );
};
