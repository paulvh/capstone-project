import React, { useState } from 'react'
import AddButtonGroup from './AddButtonGroup'

export default function AddElement() {
  const [selectedElement, setSelectedElement] = useState('')

  return (
    <>
      <select onChange={handleSelect}>
        <option value="">--Choose an element--</option>
        <option value="buttons">Button</option>
      </select>
      <form>{selectedElement === 'buttons' && <AddButtonGroup />}</form>
    </>
  )

  function handleSelect(event) {
    setSelectedElement(event.target.value)
  }
}
