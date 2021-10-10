import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TicketTable = () => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <h3>{error}</h3>;

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Date Opened</th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList.length ? (
          searchTicketList.map((ticket) => (
            <tr key={ticket._id}>
              <td>{ticket._id}</td>
              <td>
                <Link to={`/ticket/${ticket._id}`}>{ticket.subject}</Link>
              </td>
              <td>{ticket.status}</td>
              <td>{ticket.createDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No tickets to display
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
