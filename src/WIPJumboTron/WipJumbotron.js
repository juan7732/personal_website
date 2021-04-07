import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const WipJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Happy Birthday Skyler!</h1>
          <p className="lead">When do you want to go to Perry's?</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default WipJumbotron;
