import React, { useEffect, useState } from 'react'
import ButtonGroup from './components/ButtonGroup'
import Header from './components/Header'

const websocket = new WebSocket('ws://localhost:8080')
websocket.addEventListener('open', () => {
  console.log('Connected')
})

function App() {
  const [message, setMessage] = useState('')
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    message && websocket.send(message)
    // eslint-disable-next-line
  }, [update])

  return (
    <>
      <Header />
      <main>
        <ButtonGroup
          buttonVariables={[
            { name: 'Button 1', message: '1' },
            { name: 'Button 2', message: '2' },
            { name: 'Button 3', message: '3' },
          ]}
          onClickFunction={sendMessage}
        />
        <ButtonGroup
          buttonVariables={[{ name: 'Button 4', message: '4' }]}
          onClickFunction={sendMessage}
        />
        <ButtonGroup
          buttonVariables={[{ name: 'Button 5', message: '5' }]}
          onClickFunction={sendMessage}
        />
        <ButtonGroup
          buttonVariables={[{ name: 'Button 6', message: '6' }]}
          onClickFunction={sendMessage}
        />
        <ButtonGroup
          buttonVariables={[
            { name: 'Button 7', message: '7' },
            { name: 'Button 8', message: '8' },
          ]}
          onClickFunction={sendMessage}
        />
      </main>
    </>
  )

  function sendMessage(message) {
    setMessage(message)
    setUpdate(update + 1)
  }
}

export default App
