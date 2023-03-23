import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import {
  AiFillMessage,
  AiFillPhone,
  AiFillVideoCamera,
  AiFillMail,
} from 'react-icons/ai'

function ContactProfile({ selectedUser }) {
  return (
    <div className='contact-profile-div'>
      {!selectedUser ? (
        <div className='contact-profile-div-NoUser'>
          <p>No user selected</p>
        </div>
      ) : (
        <div className='contact-profile-inner-div'>
          <div className='profile-top-div'>
            <BsPersonCircle size={100} />
            <h1>{selectedUser.name}</h1>
          </div>
          <div className='profile-middle-div'>
            <div>
              <AiFillMessage
                color='#1862ce'
                size={30}
                className='profile-middle-div-icons'
              />
              <p>Message</p>
            </div>

            <div>
              <AiFillPhone
                color='#1862ce'
                size={30}
                className='profile-middle-div-icons'
              />
              <p>Phone</p>
            </div>

            <div>
              <AiFillVideoCamera
                color='#1862ce'
                size={30}
                className='profile-middle-div-icons'
              />
              <p>Video Call</p>
            </div>

            <div>
              <AiFillMail
                color='#1862ce'
                size={30}
                className='profile-middle-div-icons'
              />
              <p>Mail</p>
            </div>
          </div>

          <div className='profile-bottom-div'>
            <div className='profile-bottom-div-personal'>
              <div className='profile-bottom-div-personal-left'>
                <p>Phone</p>
                <p>Email</p>
                <p>Address</p>
              </div>

              <div className='profile-bottom-div-personal-right'>
                <p>{selectedUser.phone}</p>
                <p>{selectedUser.email}</p>
                <p>
                  {selectedUser.address.suite} {selectedUser.address.street}{' '}
                  {selectedUser.address.city} {selectedUser.address.zipcode}
                </p>
              </div>
            </div>
            <div className='profile-bottom-div-personal'>
              <div className='profile-bottom-div-personal-left'>
                <p>Company</p>
                <p>Website</p>
                <p>Catch Phrase</p>
                <p>BS</p>
              </div>

              <div className='profile-bottom-div-personal-right'>
                <p>{selectedUser.company.name}</p>
                <p>{selectedUser.website}</p>
                <p>{selectedUser.company.catchPhrase}</p>
                <p>{selectedUser.company.bs}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactProfile
