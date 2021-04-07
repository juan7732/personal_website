import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Jumbo = (props) => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Happy Birthday Skyler!</h1>
          <p>When do you want to go to <a href="https://perryssteakhouse.com/">Perry's</a></p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Jumbo;
