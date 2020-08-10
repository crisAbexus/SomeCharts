import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChartWrapper from './ChartWrapper';
import GenderDropdown from './GenderDropdown';
class App extends Component {

  render(){
    return (
      <>
        <Navbar bg="light">
            <Navbar.Brand>Barchartly</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}><GenderDropdown /></Col>
          </Row>
          <Row>
            <Col xs={12}><ChartWrapper /></Col>
          </Row>
          
        </Container>
      </>
    );
  }
}

export default App;
