import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
        />

        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
        />

        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
        />

        <input
          type='number'
          name='guests'
          placeholder='Number of guests'
          value={this.state.guests}
        />

        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form
