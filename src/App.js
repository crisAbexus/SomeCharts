import React, { Component } from 'react';
import ChartWrapper from './ChartWrapper';
class App extends Component {
  state = {
    personClicks: 0
  }

  personClicked = () => {
    this.setState({ personClicks: this.state.personClicks +1 });
  }

  render(){
    return (
      <ChartWrapper />
    );
  }
}

export default App;
