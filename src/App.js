import React, { useEffect, useState } from 'react';
import Button from './Components/Button';
import styled from 'styled-components'

const websocket = new WebSocket('ws://localhost:8080')
websocket.addEventListener('open', ()=>{
  console.log('Connected')
})

function App() {
  
  const [message, setMessage] = useState('')

  useEffect(() => {
    message && websocket.send(message)
    message && console.log(message)
  }, [message]) 
  
  
  return (
    <main className="App">
      <Button buttonName ={["Button 1"]} onClickFunction={setMessage} message="1"/>
      <Button buttonName ={["Button 2"]} onClickFunction={setMessage} message="2"/>
      <Button buttonName ={["Button 3"]} onClickFunction={setMessage} message="3"/>
    </main>
  );
}

export default App;
