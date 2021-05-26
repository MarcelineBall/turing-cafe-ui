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
      </form>
    )
  }
}

export default Form
