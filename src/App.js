import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import UserInterface from './pages/UserInterface'
import EditUserInterface from './pages/EditUserInterface'
import { Switch, Route } from 'react-router-dom'

import AddElement from './pages/AddElement'

const websocket = new WebSocket('ws://172.24.1.1:8080')
websocket.addEventListener('open', () => {
  console.log('Connected')
})

const defaultUI = [
  {
    elementType: 'Fader',
    elementProperties: { name: 'red', min: '0', max: '255' },
  },
  {
    elementType: 'Fader',
    elementProperties: { name: 'green', min: '0', max: '255' },
  },
  {
    elementType: 'Fader',
    elementProperties: { name: 'blue', min: '0', max: '255' },
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [
      { name: 'rainbow', message: 'rainbow' },
      { name: 'strobo', message: 'strobo' },
    ],
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [{ name: 'Off', message: 'off' }],
  },
  /* {
    elementType: 'ButtonGroup',
    elementProperties: [
      { name: 'Button 1', message: 'rainbow' },
      { name: 'Button 2', message: 'strobo' },
      { name: 'Button 3', message: 'strobo' },
    ],
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [{ name: 'Button 4', message: 'off' }],
  },
  {
    elementType: 'Fader',
    elementProperties: { name: 'Fader 1', min: '0', max: '255' },
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [
      { name: 'Button 5', message: 'rainbow' },
      { name: 'Button 6', message: 'strobo' },
    ],
  }, */
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
