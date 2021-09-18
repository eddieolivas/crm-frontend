import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const SearchForm = ({ onChangeHandler, searchString }) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="5" className="text-end">Search: </Form.Label>
        <Col sm="7">
          <Form.Control
            name="searchString"
            onChange={onChangeHandler}
            value={searchString}
            placeholder="Search tickets..."></Form.Control>
        </Col>
      </Form.Group>
    </Form>
  )
}

SearchForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired
}
