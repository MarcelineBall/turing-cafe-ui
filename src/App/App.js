import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card'
import Reservation from '../Reservation/Reservation'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [
        {id: 1, name: 'Christie', date: '12/29', time: '5:45 pm', guests: 4},
        {id: 2, name: 'Leta', date: '04/05', time: '6:30 pm', guests: 5},
        {id: 3, name: 'Will', date: '05/15', time: '7:00 pm', guests: 2},
        {id: 4, name: 'Eric', date: '05/30', time: '6:00 pm', guests: 3},
        {id: 5, name: 'Travis', date: '08/22', time: '6:15 pm', guests: 6},
        {id: 6, name: 'Pam', date: '09/08', time: '5:30 pm', guests: 4},
        {id: 7, name: 'Robbie', date: '11/16', time: '6:00 pm', guests: 3},
        {id: 8, name: 'Khalid', date: '01/25', time: '7:15 pm', guests: 5}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservation reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
