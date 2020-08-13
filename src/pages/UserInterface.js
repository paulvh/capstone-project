import React from 'react'
import ButtonGroup from '../components/ButtonGroup'
import Footer from '../components/Footer'
import Fader from '../components/Fader'

export default function UserInterface({
  userinterface,
  setEditedInterface,
  messageFunction,
}) {
  return (
    <>
      <main>
        {userinterface.map(
          (inputElement, index) =>
            (inputElement.elementType === 'ButtonGroup' && (
              <ButtonGroup
                buttonVariables={inputElement.elementProperties}
                onClick={messageFunction}
                key={`uibg${index}`}
              />
            )) ||
            (inputElement.elementType === 'Fader' && (
              <Fader
                variables={inputElement.elementProperties}
                sendMessage={messageFunction}
                key={`uif${index}`}
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
