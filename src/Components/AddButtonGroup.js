import React, { useState } from 'react'
import AddButton from './AddButton'

export default function AddButtonGroup({
  editedInterface,
  setEditedInterface,
}) {
  const [buttonGroup, setButtonGroup] = useState([])
  return (
    <>
      <form id="addElement" onSubmit={handleSubmit}>
        <select
          className="styledSelect"
          name="buttonCount"
          onChange={handleSelect}
        >
          <option value="0">--How many buttons?--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {buttonGroup.map((_, index) => (
          <AddButton
            title={index + 1 + '. Button-Properties:'}
            buttonNumber={index}
            buttonGroup={buttonGroup}
            setButtonGroup={setButtonGroup}
            key={`bg${index}`}
          />
        ))}
      </form>
    </>
  )

  function handleSelect(event) {
    const buttonCount = event.target.value
    let objectList = []
    for (let i = 1; i <= Number(buttonCount); i++) {
      objectList = [...objectList, { name: '', message: '' }]
    }
    setButtonGroup(objectList)
  }

  function handleSubmit(event) {
    event.preventDefault()
    let buttonElement = { elementType: 'ButtonGroup', elementProperties: [] }
    buttonElement.elementProperties = [...buttonGroup]
    setEditedInterface([...editedInterface, buttonElement])
    event.target.buttonCount.value = '0'
    setButtonGroup([])
  }
}
