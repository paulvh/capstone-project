import React, { useState, useEffect } from 'react'
import TextInput from '../components/TextInput'
import Footer from '../components/Footer'
import styled from 'styled-components'

export default function AddButtonGroup({
  editedInterface,
  setEditedInterface,
}) {
  const [buttonGroup, setButtonGroup] = useState([])

  return (
    <>
      <main>
        <form id="addButton" onSubmit={handleSubmit}>
          <StyledSelect name="buttonCount" onChange={handleSelect}>
            <option value="0">--How many buttons?--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </StyledSelect>
          {buttonGroup.map((_, index) => (
            <TextInput
              title={index + 1 + '. Button'}
              buttonNumber={index}
              buttonGroup={buttonGroup}
              setButtonGroup={setButtonGroup}
            />
          ))}
        </form>
      </main>
      <Footer currentPage={'addButtonGroup'} />
    </>
  )

  function handleSelect(event) {
    const buttonCount = event.target.value
    let objectList = []
    let titleList = []
    for (let i = 1; i <= buttonCount; i++) {
      objectList = [...objectList, { name: '', message: '' }]
    }
    setButtonGroup(objectList)
  }

  function handleSubmit(event) {
    event.preventDefault()
    let buttonElement = { elementType: 'ButtonGroup', elementProperties: [] }
    buttonElement.elementProperties = buttonGroup
    setEditedInterface([...editedInterface, buttonElement])
    event.target.buttonCount.value = '0'
    setButtonGroup([])
  }
}

const StyledSelect = styled.select`
  appearance: none;
  border: none;
  width: 200px;
  padding: 10px;
  background: #c0c4ed;
  box-shadow: inset 5px 5px 10px #9c9fc0, inset -5px -5px 10px #e4e9ff;

  &:focus {
    outline: none;
  }
`
