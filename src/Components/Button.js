import React from 'react'
import styled from 'styled-components'

export default function Button({
  name = '',
  onClick,
  message = '',
  isCircular = false,
  colorIndex = 0,
}) {
  const colorThemes = [blueTheme, purpleTheme, greenTheme]

  return (
    <>
      {isCircular ? (
        <StyledButtonBorder>
          <StyledButton
            onClick={() => onClick(message)}
            theme={colorThemes[colorIndex]}
          >
            {name}
          </StyledButton>
        </StyledButtonBorder>
      ) : (
        <StyledButtonBorder borderRadius={5}>
          <StyledButton
            onClick={() => onClick(message)}
            width={150}
            borderRadius={5}
            theme={theme}
          >
            {name}
          </StyledButton>
        </StyledButtonBorder>
      )}
    </>
  )
}

const StyledButton = styled.button`
  background: ${(props) => props.theme.bgc};
  border: none;
  color: e9ebf9;
  border-radius: ${(props) => props.borderRadius || 25}px;
  width: ${(props) => props.width || 50}px;
  height: 50px;

  &:active {
    box-shadow: inset 7px 7px 14px ${(props) => props.theme.bsLight},
      inset -7px -7px 14px ${(props) => props.theme.bsDark};
  }
`

const theme = {
  bgc: '#f65164',
  bsLight: '#af3a47',
  bsDark: '#ff6881',
}

const blueTheme = {
  bgc: '#4e7cff',
  bsLight: '#3758b5',
  bsDark: '#65a0ff',
}

const purpleTheme = {
  bgc: '#7033ff',
  bsLight: '#5024b5',
  bsDark: '#9042ff',
}

const greenTheme = {
  bgc: '#34d872',
  bsLight: '#259951',
  bsDark: '#43ff93',
}

const StyledButtonBorder = styled.div`
  border-radius: ${(props) => props.borderRadius || 30}px;
  box-shadow: 6px 6px 8px #1d2039, -6px -6px 8px #313661;
  padding: 6px;
`
