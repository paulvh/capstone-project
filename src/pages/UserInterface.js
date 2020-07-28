import React from 'react'
import ButtonGroup from '../components/ButtonGroup'
import Footer from '../components/Footer'
import Fader from '../components/Fader'
import { v4 as uuidv4 } from 'uuid'

export default function UserInterface({
  userinterface,
  setEditedInterface,
  messageFunction,
}) {
  return (
    <>
      <main>
        {userinterface.map(
          (inputElement) =>
            (inputElement.elementType === 'ButtonGroup' && (
              <ButtonGroup
                buttonVariables={inputElement.elementProperties}
                onClick={messageFunction}
                key={uuidv4()}
              />
            )) ||
            (inputElement.elementType === 'Fader' && (
              <Fader
                variables={inputElement.elementProperties}
                sendMessage={messageFunction}
                key={uuidv4()}
              />
            ))
        )}
      </main>
      <Footer
        currentPage={'userinterface'}
        setEditedInterface={setEditedInterface}
        userinterface={userinterface}
      />
    </>
  )
}
