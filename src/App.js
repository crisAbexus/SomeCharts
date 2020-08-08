import React, { Component } from 'react';
import ChartWrapper from './ChartWrapper';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
class App extends Component {

  render(){
    return (
      <>
        <Navbar bg="light">
            <Navbar.Brand>Barchartly</Navbar.Brand>
        </Navbar>
        <Container>

        </Container>
        <ChartWrapper />
      </>
    );
  }
}

export default App;
