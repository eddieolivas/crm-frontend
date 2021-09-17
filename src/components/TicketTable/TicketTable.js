import React from 'react';

import { Table } from 'react-bootstrap';

export const TicketTable = ({tickets}) => {
  return (
    <Table 
      striped
      bordered
      hover
    >
      <thead>
        <tr>
          <th>Ticket Number</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Date Opened</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? tickets.map( ticket => 
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>{ticket.createDate}</td>
            </tr>
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No tickets to display</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}
