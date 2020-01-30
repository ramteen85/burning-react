import React, { Component } from 'react';

import axios from 'axios';

const URL_FLIGHT = 'http://localhost:3001/flights/';

class Flight extends Component {

  state = {
    flight: {
      date: '3/8/13',
      flight: 9,
      destination: 'SFO',
      origin: 'JFK',
      columns: 4,
      rows: 10,
      user: {
        name: 'Tom',
        seat: '2B'
      }
    },
    selectedSeat: '',
    select: false
  };

  getFlightData = id => {
    axios.get(URL_FLIGHT + id)
    .then(res => {
      console.log(res);
      const newFlight = res;
      this.setState({ flight: newFlight});
    })
    .catch(err => console.warn(err));
  }

  componentDidMount() {
    this.getFlightData(this.props.match.params.id);
  }

  clickHandler = (event, row, col) => {
    if (!this.state.select) {
      let text = event.target;
      text.innerHTML = (text.innerHTML === 'avail') ? 'X' : text.innerHTML;
      const rowLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
      const newSeat = `${row+1}${rowLetters[col]}`;
      this.setState({
        selectedSeat: newSeat,
        select: true
      });
    }
  }

  render() {
    const { date, flight, destination, origin, columns, rows, user } = this.state.flight;
    const seats = new Array(rows).fill(new Array(columns).fill('avail'));

    return (
      <div>
        <h1>Virgin Airlines</h1>
        <h2>{date} Flight {flight} {destination} &gt; {origin}</h2>
        <div style={{width: "250px"}}>
          {
            seats.map((row, i_r) => {
              return row.map((column, i_c) => {
                console.log('r', i_r, 'c', i_c);
                return <div key={`${i_r}${i_c}`} style={{width: "50px", border: "1px solid black", display: "inline-block", margin: "5px", backgroundColor: "gray"}} onClick={(e) => this.clickHandler(e, i_r, i_c)}>{user.name.length > 0 ? user.name : 'avail'}</div>
              })
            })
          }

        </div>
        <div><p>{this.state.selectedSeat}</p> selected</div>
      </div>
    );
  }
}

export default Flight;
