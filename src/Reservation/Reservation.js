import React from 'react'
import Card from '../Card/Card'

const Reservation = ({ reservations }) => {
  const allReservations = reservations.map(resy => {
    return (
      <Card
        key={resy.id}
        id={resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        guests={resy.guests}
      />
    )
  })
  return allReservations
}

export default Reservation
