import React, { useState, useEffect } from 'react'

function ContactsList({ setSelectedUser }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.sort((a, b) => a.name.localeCompare(b.name)))
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='contacts-list-div'>
      <h1>Contact List</h1>

      <div className='contacts-list-inner-div'>
        {users.map((user) => {
          return (
            <p
              key={user.id}
              className='contact-names'
              onClick={() => setSelectedUser(user)}
            >
              {user.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ContactsList
