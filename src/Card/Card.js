import React from 'react'

const Card = ({ name, date, time, guests }) => {
  return(
    <article>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {guests}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Card
