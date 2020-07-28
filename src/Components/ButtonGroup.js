import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { v4 as uuidv4 } from 'uuid'

export default function ButtonGroup({ buttonVariables, onClick }) {
  let buttonType = 'rectangular'

  if (buttonVariables.length > 1) {
    buttonType = 'circular'
  }

  return (
    <StyledButtonGroup>
      {buttonVariables.map((variables, index) => (
        <Button
          type={buttonType}
          name={variables.name}
          onClick={onClick}
          message={variables.message}
          colorIndex={index}
          key={uuidv4()}
        />
      ))}
    </StyledButtonGroup>
  )
}

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`
