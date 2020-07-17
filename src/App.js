import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import UserInterface from './pages/UserInterface'
import EditUserInterface from './pages/EditUserInterface'
import { Switch, Route } from 'react-router-dom'
import AddButtonGroup from './pages/AddButtonGroup'

const websocket = new WebSocket('ws://localhost:8080')
websocket.addEventListener('open', () => {
  console.log('Connected')
})

const defaultUI = [
  {
    elementType: 'ButtonGroup',
    elementProperties: [
      { name: 'Button 1', message: '1' },
      { name: 'Button 2', message: '2' },
      { name: 'Button 3', message: '3' },
    ],
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [{ name: 'Button 4', message: '4' }],
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [{ name: 'Button 5', message: '5' }],
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [{ name: 'Button 6', message: '6' }],
  },
  {
    elementType: 'ButtonGroup',
    elementProperties: [
      { name: 'Button 7', message: '7' },
      { name: 'Button 8', message: '8' },
    ],
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
      <Header />

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
          path="/AddButton"
          render={() => (
            <AddButtonGroup
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
