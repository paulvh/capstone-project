import React from 'react'
import ButtonGroup from './ButtonGroup'

export default function UserInterface({ userinterface, messageFunction }) {
  return (
    <>
      {userinterface.map(
        (inputElement) =>
          inputElement.elementType === 'ButtonGroup' && (
            <ButtonGroup
              buttonVariables={inputElement.elementProperties}
              onClick={messageFunction}
            />
          )
      )}
    </>
  )
}
