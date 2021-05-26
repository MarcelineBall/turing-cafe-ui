import React from 'react'

const Card = ({ name, date, time, guests }) => {
  return(
    <article>
      <h2 className='name'>{name}</h2>
      <p className='date'>{date}</p>
      <p className='time'>{time}</p>
      <p className='guests'>Number of guests: {guests}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Card
