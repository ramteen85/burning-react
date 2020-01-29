import React, { Component } from 'react';
import SearchField from './SearchField';
import FlightResults from './FlightResults';

import axios from 'axios';

const URL_FLIGHTS = 'http://localhost:3000/flights'; //'http://localhost:3000/flights';

class SearchFlights extends Component {

  state = {
    origin: '',
    destination: '',
    flights: []
  };

  handleDestination = event => {
    this.setState({ destination: event.target.value });
  }

  handleOrigin = event => {
    this.setState({ origin: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('test');
    axios.get(`${URL_FLIGHTS}/${this.state.origin}/${this.state.destination}`)
    .then(res => {
      console.log('request:',res);
      this.setState({ flights: res});
    }
    )
    .catch(err => console.warn(err));
  }

  render() {
    const testData = [
      {
        id: 1,
        date: '3/1/13',
        flight: 23,
        origin: 'JFK',
        destination: 'SFO',
        plane: 757
      },
      {
        id: 2,
        date: '3/3/13',
        flight: 412,
        origin: 'JFK',
        destination: 'SFO',
        plane: 747
      },
      {
        id: 3,
        date: '3/1/13',
        flight: 9,
        origin: 'JFK',
        destination: 'SFO',
        plane: 757
      }
    ];

    return (
      <div>
        <h1>Virgin Airlines</h1>
        <SearchField onSubmit={this.handleSubmit} onChangeOrigin={this.handleOrigin} onChangeDestination={this.handleDestination} />
        <h2>Flight Search Results</h2>
        <FlightResults flights={this.state.flights} /> {/* this.state.flights */}
      </div>
    );
  }

}

export default SearchFlights;
