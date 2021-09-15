import React from 'react';

import { Table } from 'react-bootstrap';

export const TicketTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ticket Number</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Date Opened</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>SSL Issue</td>
          <td>Client Response Pending</td>
          <td>2021-09-14</td>
        </tr>
        <tr>
          <td>1</td>
          <td>SSL Issue</td>
          <td>Client Response Pending</td>
          <td>2021-09-14</td>
        </tr>
        <tr>
          <td>1</td>
          <td>SSL Issue</td>
          <td>Client Response Pending</td>
          <td>2021-09-14</td>
        </tr>
        <tr>
          <td>1</td>
          <td>SSL Issue</td>
          <td>Client Response Pending</td>
          <td>2021-09-14</td>
        </tr>
      </tbody>
    </Table>
  )
}
