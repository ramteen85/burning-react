import React, { Component } from 'react';
import SearchField from './SearchField';
import FlightResults from './FlightResults';
import styles from './css/SearchFlights.module.css';
import axios from 'axios';

const URL_FLIGHTS = 'http://localhost:3001/flights';

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

    axios.get(`${URL_FLIGHTS}/${this.state.origin}/${this.state.destination}`)
    .then(res => {
      console.log(res);
      this.setState({ flights: res.data})
    })
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
      <div className={styles.container}>
        <h1 className={styles.header1}>Virgin Airlines</h1>
        <SearchField onSubmit={this.handleSubmit} onChangeOrigin={this.handleOrigin} onChangeDestination={this.handleDestination} />
        <h2 className={styles.header2}>Flight Search Results</h2>
        <FlightResults flights={this.state.flights} /> {/* this.state.flights */}
      </div>
    );
  }

}

export default SearchFlights;
