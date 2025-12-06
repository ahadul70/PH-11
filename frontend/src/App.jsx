import { useState } from 'react'
import './App.css'
import ClubCreate from './clubCreate'
import EventCreate from './EventCreate'
import EventRegistration from './EventRegistration'

function App() {
 

  return (
    <>
    <ClubCreate/>
    <div className="divider">OR</div>
    <EventCreate/>
    <div className="divider">OR</div>
    <EventRegistration/>
    </>
  )
}

export default App
