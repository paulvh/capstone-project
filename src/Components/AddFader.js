import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddFader({ editedInterface, setEditedInterface }) {
  const [props, setProps] = useState({ name: '', min: '', max: '' })
  return (
    <StyledForm id="addElement" onSubmit={handleSubmit}>
      <StyledLabel>
        <StyledInput
          name="name"
          onChange={handleChange}
          value={props.name}
          required
          placeholder="Name..."
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          name="min"
          onChange={handleChange}
          value={props.min}
          placeholder="Minimum value..."
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          name="max"
          onChange={handleChange}
          value={props.max}
          placeholder="Maximum value..."
        />
      </StyledLabel>
    </StyledForm>
  )

  function handleChange(event) {
    setProps({ ...props, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    let faderElement = { elementType: 'Fader', elementProperties: {} }
    faderElement.elementProperties = props
    setEditedInterface([...editedInterface, faderElement])
    setProps({ name: '', min: '', max: '' })
  }
}

const StyledInput = styled.input`
  background: #c0c4ed;
  box-shadow: inset 5px 5px 10px #9c9fc0, inset -5px -5px 10px #e4e9ff;
  border-radius: 3px;
  height: 30px;

  &:focus {
    outline: none;
  }
`
const StyledLabel = styled.label`
  background: #272b4d;
  box-shadow: 3px 3px 6px #141628, -3px -3px 6px #3a4072;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
`

const StyledForm = styled.form`
  display: grid;
  gap: 20px;
`
