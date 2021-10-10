import React from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col } from "react-bootstrap";
import { filterSearchTicket } from "../../pages/ticketList/ticketActions";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { value } = e.target;

    dispatch(filterSearchTicket(value));
  };

  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="5" className="text-end">
          Search:{" "}
        </Form.Label>
        <Col sm="7">
          <Form.Control
            name="searchString"
            onChange={onChangeHandler}
            placeholder="Search tickets..."
          ></Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
};
