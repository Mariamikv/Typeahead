import React from 'react'
import "../assets/styles/Card.css"

function Card({user}) {
  return (
    
    <div  className="card-container">
      <a href={user.html_url}
          rel="noreferrer"
          target='_blank'
      >
        <div className="card-item">
          <img className="image" src={user.avatar_url} alt={user.login} />
          <h3 className="username"> {user.login} </h3>
      </div>
    </a>
    </div>
    
  )
}

export default Card