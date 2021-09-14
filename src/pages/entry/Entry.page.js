import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import './entry.style.css';

export const Entry = () => {
  return (
    <div className="entry-page bg-info">
      <Jumbotron>
        <h1>Entry page</h1>
        <p>This is a jumbotron.</p>
        <Button variant="primary">Primary Button</Button>
      </Jumbotron>
    </div>
  )
}
