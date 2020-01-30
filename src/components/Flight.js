import React, { Component } from 'react';

import axios from 'axios';

const URL_FLIGHT = 'http://localhost:3001/flights/';

class Flight extends Component {

  state = {
    flight: {},
    plane: {},
    reservations: [],
    // flight: {
    //   date: '3/8/13',
    //   flight: 9,
    //   destination: 'SFO',
    //   origin: 'JFK',
    //   columns: 4,
    //   rows: 10,
    //   user: {
    //     name: 'Tom',
    //     seat: '2B'
    //   }
    // },
    user: [],
    selectedSeat: '',
    select: false
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.flight !== prevState.flight) {
  //     this.getFlightData(this.props.match.params.id);
  //   }
  // }

  componentDidMount() {
    this.getFlightData(this.props.match.params.id);
  }

  getFlightData = id => {
    axios.get(URL_FLIGHT + id)
    .then(res => {
      console.log(res);
      const newFlight = res.data.flight;
      const newPlane = res.data.plane;
      const newReservations = res.data.reservations;
      console.log('flight:', newFlight);
      this.setState({
        flight: newFlight,
        plane: newPlane,
        reservations: newReservations
      });
    })
    .catch(err => console.warn(err));
  }

  // getReservation = id => {
  //   axios.get(`http://localhost:3001/users/${id}`)
  //   .then( res => res.data.name)
  //   .catch(err => console.warn(err));
  // }

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

  capitalize = word => {
    return word[0].toUpperCase() + word.slice(1);
  }

  render() {
    //const { date, flight_number, destination, origin} = this.state.flight;
    // console.log('date:', this.state.flight.date, 'flight_nr', this.state.flight.flight_number, 'destination', this.state.flight.destination, 'origin', this.state.flight.origin);
    // user

    const { columns, rows } = this.state.plane;
    console.log(columns, 'rows', rows);
    const seats = new Array(rows).fill(new Array(columns).fill('avail'));

    return (
      <div style={{border: "1px solid #F6490D", borderRadius: "15px",backgroundColor: "#53ACA8",}}>
        <h1>Virgin Airlines</h1>
        <h2>{this.state.flight.date} Flight {this.state.flight.flight_number} {this.state.flight.origin ? this.capitalize(this.state.flight.origin) : null} &gt; {this.state.flight.destination ? this.capitalize(this.state.flight.destination) : null}</h2>
        <div style={{width: "250px"}}>

          {
            seats.map((row, i_r) => {
              return row.map((column, i_c) => {
                console.log('r', i_r, 'c', i_c);
                return <div key={`${i_r}${i_c}`} style={{width: "50px", border: "1px solid #F6490D", display: "inline-block", margin: "5px", backgroundColor: "orange", color: 'black', borderRadius: "5px"}} onClick={(e) => this.clickHandler(e, i_r, i_c)}>{this.state.user.length > 0 ? this.state.user : 'avail'}</div>
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
