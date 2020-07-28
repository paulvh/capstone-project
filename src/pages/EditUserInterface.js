import React from 'react'
import ButtonGroup from '../components/ButtonGroup'
import styled from 'styled-components'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import Fader from '../components/Fader'
import { v4 as uuidv4 } from 'uuid'

export default function EditUserInterface({
  editedInterface,
  setEditedInterface,
  setUserinterface,
}) {
  const history = useHistory()

  return (
    <>
      <main>
        {editedInterface.map(
          (inputElement, index) =>
            (inputElement.elementType === 'ButtonGroup' && (
              <StyledEditField key={uuidv4()}>
                <ButtonGroup buttonVariables={inputElement.elementProperties} />
                <Button type="delete" onClick={() => deleteElement(index)} />
              </StyledEditField>
            )) ||
            (inputElement.elementType === 'Fader' && (
              <StyledEditField key={uuidv4()}>
                <Fader variables={inputElement.elementProperties} />
                <Button type="delete" onClick={() => deleteElement(index)} />
              </StyledEditField>
            ))
        )}
        <Button
          type="misc"
          name="Add Button"
          onClick={() => history.push('/AddElement')}
        />
      </main>
      <Footer
        currentPage={'editUserinterface'}
        saveFunction={saveToLocalStorage}
      />
    </>
  )

  function deleteElement(index) {
    const newInterface = [
      ...editedInterface.slice(0, index),
      ...editedInterface.slice(index + 1),
    ]
    setEditedInterface(newInterface)
  }

  function saveToLocalStorage() {
    localStorage.setItem('interface', JSON.stringify(editedInterface))
    setUserinterface(editedInterface)
  }
}

const StyledEditField = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`
