import React from 'react'
import styled from 'styled-components'

export default function Button({
  name = '',
  onClickFunction,
  message = '',
  isCircular = false,
  colorIndex = 0,
}) {
  const colorsActive = ['#275ef9', '#6120f9', '#22ba5b']
  const colors = ['#4e7cff', '#7033ff', '#34d872']

  const color = colors[colorIndex]
  const colorActive = colorsActive[colorIndex]

  return (
    <>
      {isCircular ? (
        <StyledButtonBorder>
          <StyledButton
            onClick={() => onClickFunction(message)}
            buttonColor={color}
            buttonColorActive={colorActive}
          >
            {name}
          </StyledButton>
        </StyledButtonBorder>
      ) : (
        <StyledButtonBorder borderRadius={5}>
          <StyledButton
            onClick={() => onClickFunction(message)}
            width={150}
            borderRadius={5}
          >
            {name}
          </StyledButton>
        </StyledButtonBorder>
      )}
    </>
  )
}

const StyledButton = styled.button`
  background: ${(props) => props.buttonColor || '#f65164'};
  border: none;
  color: e9ebf9;
  border-radius: ${(props) => props.borderRadius || 25}px;
  width: ${(props) => props.width || 50}px;
  height: 50px;

  &:active {
    background: ${(props) => props.buttonColorActive || '#e7394d'};
  }
`
const StyledButtonBorder = styled.div`
  border-radius: ${(props) => props.borderRadius || 30}px;
  box-shadow: 6px 6px 8px #1d2039, -6px -6px 8px #313661;
  padding: 6px;
`
