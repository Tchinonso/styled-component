import React from 'react'
import { CardStyles } from './styles/Card.styles'

const Card = ({item: {id, title, body, image}}) => {
  return (
    <CardStyles layout={id % 2 === 0 && 'row-reverse'}>
        <div>
        <h2>{title}</h2>
        <p>{body}</p>
        </div>

        <div>
        <img src={`../images/${image}`} alt='' />
        </div>
    </CardStyles>
  )
}

export default Card