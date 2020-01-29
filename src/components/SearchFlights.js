import React, { Component } from 'react';
import SearchField from './SearchField';
import FlightResults from './FlightResults';

const URL_FLIGHTS = 'http://localhost:3000/flights';

class SearchFlights extends Component {

  state = {
    origin: '',
    destination: ''
  };

  handleDestination = event => {
    this.setState({ destination: event.target.value });
  }

  handleOrigin = event => {
    this.setState({ origin: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.get(URL_FLIGHTS)
    .then(res => console.log(res))
    .catch(err => console.warn(err));
  }

  render() {
    return (
      <div>
        <h1>Virgin Airlines</h1>
        <SearchField onSubmit={this.handleSubmit} onChangeOrigin={this.handleOrigin} onChangeDestination={this.handleDestination} />
        <h2>Flight Search Results</h2>
        <FlightResults />
      </div>
    );
  }

}

export default SearchFlights;
