import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function TextInput({
  title,
  buttonNumber,
  buttonGroup,
  setButtonGroup,
}) {
  const [props, setProps] = useState(buttonGroup[buttonNumber])

  useEffect(() => {
    let newButtonGroup = [...buttonGroup]
    newButtonGroup[buttonNumber] = props
    setButtonGroup(newButtonGroup)
  }, [props])

  return (
    <>
      <h3>{title}</h3>
      <StyledInput
        name="name"
        type="text"
        value={props.name}
        onChange={handleChange}
        placeholder="Button-Name..."
        required
      ></StyledInput>
      <StyledInput
        name="message"
        type="text"
        value={props.message}
        onChange={handleChange}
        placeholder="Button-Message..."
        required
      ></StyledInput>
    </>
  )

  function handleChange(event) {
    setProps({ ...props, [event.target.name]: event.target.value })
  }
}

const StyledInput = styled.input`
  background: #dddddd;
  box-shadow: inset 9px 9px 18px #b5b5b5, inset -9px -9px 18px #ffffff;
  border-radius: 8px;
`
