import './App.css'
import ContactProfile from './components/ContactProfile'
import ContactsList from './components/ContactsList'
import { useState } from 'react'

function App() {
  const [selectedUser, setSelectedUser] = useState()
  return (
    <div className='main-div-wrapper'>
      <div className='main-div'>
        <ContactsList setSelectedUser={setSelectedUser} />
        <ContactProfile selectedUser={selectedUser} />
      </div>
      <a href='https://github.com/amadywr/contacts-app'>
        Click here for source code
      </a>
    </div>
  )
}

export default App
