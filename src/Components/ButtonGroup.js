import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function ButtonGroup({ buttonVariables, onClick }) {
  const isButtonGroup = buttonVariables.length > 1

  return (
    <StyledButtonGroup>
      {buttonVariables.map((variables, index) => (
        <Button
          isCircular={isButtonGroup}
          name={variables.name}
          onClick={onClick}
          message={variables.message}
          colorIndex={index}
          key={variables.name + variables.message + index}
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
