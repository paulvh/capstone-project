import React from 'react'
import ButtonGroup from '../components/ButtonGroup'
import Footer from '../components/Footer'

export default function UserInterface({ userinterface, messageFunction }) {
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
      <Footer currentPage={'userinterface'} />
    </>
  )
}
