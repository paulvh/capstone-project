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
  const [clickEvent, setUpdate] = useState(0)
  const [userinterface, setUserinterface] = useState(defaultUI)
  const [editedInterface, setEditedInterface] = useState(userinterface)

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
              userinterface={defaultUI}
              messageFunction={sendMessage}
            />
          )}
        />
        <Route
          path="/editUI"
          render={() => (
            <EditUserInterface
              editedInterface={editedInterface}
              setEditedInterface={setEditedInterface}
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
    setUpdate(clickEvent + 1)
  }
}
