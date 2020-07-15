import React, { useState, useEffect } from 'react'
import TextInput from '../components/TextInput'
import Footer from '../components/Footer'

export default function AddButtonGroup({
  editedInterface,
  setEditedInterface,
}) {
  const [buttonGroup, setButtonGroup] = useState([])
  const [buttonList, setbuttonList] = useState([])

  return (
    <>
      <main>
        <select onChange={handleSelect}>
          <option value="0">--How many buttons?--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <form id="addButton" onSubmit={handleSubmit}>
          {buttonList.map((button, index) => (
            <TextInput
              title={button}
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
      titleList = [...titleList, i + '. Button']
    }
    setButtonGroup(objectList)
    setbuttonList(titleList)
  }

  function handleSubmit(event) {
    event.preventDefault()
    let buttonElement = { elementType: 'ButtonGroup', elementProperties: [] }
    buttonElement.elementProperties = buttonGroup
    setEditedInterface([...editedInterface, buttonElement])
  }
}
