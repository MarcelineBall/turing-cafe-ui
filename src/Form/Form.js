import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', guests: '' })
  }

  bookReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.makeReservation(newReservation)
    this.clearInputs()
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type='number'
          name='guests'
          placeholder='Number of guests'
          value={this.state.guests}
          onChange={(event) => this.handleChange(event)}
        />

        <button onClick={ (event) => {this.bookReservation(event)}}>Make Reservation</button>
      </form>
    )
  }
}

export default Form
