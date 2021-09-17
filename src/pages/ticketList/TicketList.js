import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { TicketTable } from '../../components/TicketTable/TicketTable';
import tickets from '../../assets/data/dummy-ticket.json';

export const TicketList = () => {
  const [searchString, setSearchString] = useState('');
  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {
  }, [searchString, displayTicket]);

  const onChangeHandler = e => {
    const {value} = e.target;
    setSearchString(value);
    searchTickets(value);
  };

  const searchTickets = search => {
    const displayTickets = tickets.filter(ticket => 
      ticket.subject.toLowerCase().includes(search.toLowerCase())
    );
    
    setDisplayTicket(displayTickets);
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
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm
            onChangeHandler={onChangeHandler}
            searchString={searchString} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable
            tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  )
}
