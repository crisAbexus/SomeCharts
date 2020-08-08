import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  state = {
    personClicks: 0
  }

  personClicked() {
    this.setState({ personClicks: this.state.personClicks +1 });
    // DO NOT DO THIS
    this.state.personClicks = this.state.PersonClicks + 1 
  }
  render(){
    return (
      <div className="App">
        <Test person="Tony" />
        <Test person="Mary" />
        <Test person="Susan" />
        Person Clicks: {this.state.personClicks}
      </div>
    );
  }
}

export default App;
