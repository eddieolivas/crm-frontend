import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { AddTicketForm } from './AddTicketForm';
import { shortText } from '../../utils/validation';

export const NewTicket = () => {
  const initialFormData = {
    subject: '',
    createDate: '',
    details: ''
  };

  const initialFormError = {
    subject: false,
    createDate: false,
    details: false
  };

  const [ formData, setFormData ] = useState(initialFormData);
  const [ formDataError, setFormDataError ] = useState(initialFormError);

  useEffect(() => {

  }, [formData, formDataError]);

  const onChangeHandler = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const addTicketHandler = async (e) => {
    e.preventDefault();

    setFormDataError(initialFormError);

    const isValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isValid
    })
    console.log('Form submit requested.', formData);
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Add New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm 
            formData={formData}
            onChangeHandler={onChangeHandler}
            addTicketHandler={addTicketHandler}
            formDataError={formDataError}/>
        </Col>
      </Row>
    </Container>
  )
}
