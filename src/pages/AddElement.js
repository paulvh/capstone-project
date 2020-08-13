import React, { useState } from 'react'
import AddButtonGroup from '../components/AddButtonGroup'
import Footer from '../components/Footer'
import AddFader from '../components/AddFader'
import styled from 'styled-components'

export default function AddElement({ editedInterface, setEditedInterface }) {
  const [selectedElement, setSelectedElement] = useState('')

  return (
    <>
      <main>
        <label>
          <StyledH3>Select Element:</StyledH3>
          <select onChange={handleSelect} className="styledSelect">
            <option value="">--Choose an element--</option>
            <option value="buttons">Buttons</option>
            <option value="fader">Fader</option>
          </select>
        </label>

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

const StyledH3 = styled.h3`
  margin-bottom: 30px;
`
