import React from 'react'
import styled from 'styled-components'

export default function Button({
  name = '',
  onClick,
  message = '',
  colorIndex = 0,
  className,
  type = 'rectangular',
  form = '',
}) {
  const colorThemes = [blueTheme, purpleTheme, greenTheme]

  if (type === 'delete') {
    return (
      <StyledButtonBorder
        className={className}
        borderRadius={7}
        padding={2}
        width="24"
      >
        <StyledButton
          onClick={onClick}
          theme={deleteTheme}
          width={20}
          height={20}
          borderRadius={10}
        ></StyledButton>
      </StyledButtonBorder>
    )
  } else if (type === 'circular') {
    return (
      <StyledButtonBorder className={className} width="62">
        <StyledButton
          onClick={() => onClick(message)}
          theme={colorThemes[colorIndex]}
          form={form}
        >
          {name}
        </StyledButton>
      </StyledButtonBorder>
    )
  } else if (type === 'misc') {
    return (
      <StyledButtonBorder borderRadius={31} className={className}>
        <StyledButton
          onClick={onClick}
          width={150}
          borderRadius={25}
          theme={greenTheme}
          form={form}
        >
          {name}
        </StyledButton>
      </StyledButtonBorder>
    )
  } else if (type === 'rectangular') {
    return (
      <StyledButtonBorder borderRadius={11} className={className}>
        <StyledButton
          onClick={() => onClick(message)}
          width={150}
          borderRadius={5}
          theme={theme}
          form={form}
        >
          {name}
        </StyledButton>
      </StyledButtonBorder>
    )
  }
}

const StyledButton = styled.button`
  background: ${(props) => props.theme.bgc};
  border: none;
  color: e9ebf9;
  border-radius: ${(props) => props.borderRadius || 25}px;
  width: ${(props) => props.width || 50}px;
  height: ${(props) => props.height || 50}px;
  
  &:active {
    transition: box-shadow 0.1s ease-out;
    box-shadow: inset 7px 7px 14px ${(props) => props.theme.bsLight},
      inset -7px -7px 14px ${(props) => props.theme.bsDark}; */
  }

  &:focus {
    outline: none;
  }
`

const theme = {
  bgc: 'linear-gradient(145deg, #dd495a, #ff576b)' /* '#f65164' */,
  bsLight: '#af3a47',
  bsDark: '#ff6881',
}

const blueTheme = {
  bgc: 'linear-gradient(145deg, #4670e6, #5385ff)' /* '#4e7cff' */,
  bsLight: '#3758b5',
  bsDark: '#65a0ff',
}

const purpleTheme = {
  bgc: 'linear-gradient(145deg, #652ee6, #7837ff)' /* '#7033ff' */,
  bsLight: '#5024b5',
  bsDark: '#9042ff',
}

const greenTheme = {
  bgc: 'linear-gradient(145deg, #2fc267, #38e77a)' /* '#34d872' */,
  bsLight: '#259951',
  bsDark: '#43ff93',
}

const deleteTheme = {
  bgc: 'linear-gradient(145deg, #8a0000, #a40000)',
  bsLight: '#630000',
  bsDark: '#cf0000',
}

const StyledButtonBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 162}px;
  border-radius: ${(props) => props.borderRadius || 30}px;
  padding: ${(props) => props.padding || 6}px;
  box-shadow: 6px 6px 8px #1d2039, -6px -6px 8px #313661;
`
