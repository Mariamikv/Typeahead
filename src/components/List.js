
import React from 'react'
import Card from './Card';
import "../assets/styles/style.css"

function List({users}) {
  return (
    <div>
      <ul className="list-container">
      {
        users.map((user, index) => (
          <Card user={user} key={index}/>
        ))
      }
    </ul>
    </div>
    
  )
}

export default List