import React from 'react'
import ButtonGroup from '../components/ButtonGroup'
import Footer from '../components/Footer'

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
            inputElement.elementType === 'ButtonGroup' && (
              <ButtonGroup
                buttonVariables={inputElement.elementProperties}
                onClick={messageFunction}
              />
            )
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
