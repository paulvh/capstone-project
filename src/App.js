import React, { useEffect, useState } from 'react'
import ButtonGroup from './Components/ButtonGroup'
import Header from './Components/Header'

const websocket = new WebSocket('ws://localhost:8080')
websocket.addEventListener('open', () => {
  console.log('Connected')
})

function App() {
  const [message, setMessage] = useState('')
  const [update, setUpdate] = useState(0)

  useEffect(() => {
    message && websocket.send(message)
  }, [update])

  return (
    <>
      <Header />
      <main>
        <ButtonGroup
          buttonNames={['Button 1', 'Button 2', 'Button 3']}
          onClickFunction={sendMessage}
          messages={['1', '2', '3']}
        />
        <ButtonGroup
          buttonNames={['Button 4']}
          onClickFunction={sendMessage}
          messages={['4']}
        />
        <ButtonGroup
          buttonNames={['Button 5']}
          onClickFunction={sendMessage}
          messages={['5']}
        />
        <ButtonGroup
          buttonNames={['Button 6']}
          onClickFunction={sendMessage}
          messages={['6']}
        />
        <ButtonGroup
          buttonNames={['Button 7', 'Button 8']}
          onClickFunction={sendMessage}
          messages={['7', '8']}
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
