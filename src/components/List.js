
import React from 'react'
import Card from './Card';

function List({users}) {
  return (
    <ul >
      {
        users.map((user, index) => (
          <Card user={user} key={index}/>
        ))
      }
    </ul>
  )
}

export default List