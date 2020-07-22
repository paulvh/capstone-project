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
    <StyledDiv>
      <StyledH3>{title}</StyledH3>
      <StyledLabel>
        <StyledInput
          name="name"
          type="text"
          value={props.name}
          onChange={handleChange}
          placeholder="Button-Name..."
          required
        />
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          name="message"
          type="text"
          value={props.message}
          onChange={handleChange}
          placeholder="Button-Message..."
          required
        />
      </StyledLabel>
    </StyledDiv>
  )

  function handleChange(event) {
    setProps({ ...props, [event.target.name]: event.target.value })
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

const StyledDiv = styled.div`
  display: grid;
  gap: 20px;
`
const StyledH3 = styled.h3`
  margin-top: 30px;
`
