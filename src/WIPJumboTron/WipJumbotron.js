import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const WipJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">This site is a work in progress</h1>
          <p className="lead">Come back later for more to come.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default WipJumbotron;