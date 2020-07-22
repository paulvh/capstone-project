import React, { useState } from 'react'
import AddButtonGroup from './AddButtonGroup'
import Footer from '../components/Footer'
import AddFader from '../components/AddFader'

export default function AddElement({ editedInterface, setEditedInterface }) {
  const [selectedElement, setSelectedElement] = useState('')

  return (
    <>
      <main>
        <select onChange={handleSelect} className="styledSelect">
          <option value="">--Choose an element--</option>
          <option value="buttons">Buttons</option>
          <option value="fader">Fader</option>
        </select>
        {(selectedElement === 'buttons' && (
          <AddButtonGroup
            editedInterface={editedInterface}
            setEditedInterface={setEditedInterface}
          />
        )) ||
          (selectedElement === 'fader' && (
            <AddFader
              editedInterface={editedInterface}
              setEditedInterface={setEditedInterface}
            />
          ))}
      </main>
      <Footer currentPage={'addElement'} />
    </>
  )

  function handleSelect(event) {
    setSelectedElement(event.target.value)
  }
}
