import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function ButtonGroup({ buttonVariables, onClickFunction }) {
  const isButtonGroup = buttonVariables.length > 1

  return (
    <StyledButtonGroup>
      {buttonVariables.map((vars, index) => (
        <Button
          isCircular={isButtonGroup}
          name={vars.name}
          onClickFunction={onClickFunction}
          message={vars.message}
          colorIndex={index}
          key={vars.name + vars.message + index}
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
