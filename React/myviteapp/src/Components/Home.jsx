import React from 'react'
import person from '../assets/person.jpeg'

function Home(props) {
  const userInfo = props.user;
  return (
    <div>
        <h2>Username:{userInfo.name}</h2>
        <h3>Email:{userInfo.email}</h3>
        <h3>Contact:{userInfo.tel}</h3>
        <img src={person} alt="person image" />
    </div>
  )
}

export default Home