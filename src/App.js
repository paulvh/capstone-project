import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import UserInterface from './pages/UserInterface'
import EditUserInterface from './pages/EditUserInterface'
import { Switch, Route } from 'react-router-dom'

import AddElement from './pages/AddElement'

const websocket = new WebSocket('ws://192.168.178.34:8765')
websocket.addEventListener('open', () => {
  console.log('Connected')
})

const defaultUI = [
  {
    elementType: 'Fader',
    elementProperties: { name: 'Rot', min: '0', max: '255' },
  },
  {
    elementType: 'Fader',
    elementProperties: { name: 'Grün', min: '0', max: '255' },
  },
  {
    elementType: 'Fader',
    elementProperties: { name: 'Blau', min: '0', max: '255' },
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [
      { name: 'Rainbow', message: 'rainbow' },
      { name: 'Strobo', message: 'strobo' },
    ],
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [{ name: 'Off', message: 'off' }],
  },
]
export default function App() {
  const [message, setMessage] = useState('')
  const [clickEvent, setClickEvent] = useState(0)
  const [userinterface, setUserinterface] = useState([])
  const [editedInterface, setEditedInterface] = useState([])

  useEffect(() => {
    setUserinterface(JSON.parse(localStorage.getItem('interface')) || defaultUI)
    setEditedInterface(
      JSON.parse(localStorage.getItem('interface')) || defaultUI
    )
  }, [])

  useEffect(() => {
    message && websocket.send(message)
    // eslint-disable-next-line
  }, [clickEvent])

  return (
    <>
      <Header className="fixed-position" />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <UserInterface
              userinterface={userinterface}
              messageFunction={sendMessage}
              setEditedInterface={setEditedInterface}
            />
          )}
        />
        <Route
          path="/editUI"
          render={() => (
            <EditUserInterface
              editedInterface={editedInterface}
              setEditedInterface={setEditedInterface}
              setUserinterface={setUserinterface}
            />
          )}
        />
        <Route
          path="/AddElement"
          render={() => (
            <AddElement
              editedInterface={editedInterface}
              setEditedInterface={setEditedInterface}
            />
          )}
        />
      </Switch>
    </>
  )

  function sendMessage(message) {
    setMessage(message)
    setClickEvent(clickEvent + 1)
  }
}
