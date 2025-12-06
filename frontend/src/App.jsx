import { useState } from 'react'
import './App.css'
import ClubCreate from './clubCreate'
import EventCreate from './EventCreate'
import EventRegistration from './EventRegistration'
import ClubJoin from './ClubJoin'
import Clubs from './ClubsCards'

function App() {
 

  return (
    <>
    <ClubCreate/>
    <div className="divider">OR</div>
    <EventCreate/>
    <div className="divider">OR</div>
    <EventRegistration/>
    <div className="divider">OR</div>
    <ClubJoin/>
    <div className="divider">OR</div>
    <Clubs/>
    </>
  )
}

export default App
