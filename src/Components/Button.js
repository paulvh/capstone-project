import React from 'react'
import styled from 'styled-components'

export default function Button({
  name = '',
  onClick = () => console.log(),
  message = '',
  colorIndex = 0,
  type = 'rectangular',
  form = '',
}) {
  const colorThemes = [blueTheme, purpleTheme, greenTheme]

  if (type === 'delete') {
    return (
      <StyledButtonBorder
        borderRadius={9}
        padding={2}
        width="18"
        position="absolute"
        right="-17"
      >
        <StyledButton
          onClick={onClick}
          theme={deleteTheme}
          width={14}
          height={14}
          borderRadius={7}
        ></StyledButton>
      </StyledButtonBorder>
    )
  } else if (type === 'circular') {
    return (
      <StyledButtonBorder width="62">
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
      <StyledButtonBorder borderRadius={21} width={102}>
        <StyledButton
          onClick={onClick}
          width={90}
          borderRadius={15}
          height={30}
          theme={greenTheme}
          form={form}
        >
          {name}
        </StyledButton>
      </StyledButtonBorder>
    )
  } else if (type === 'rectangular') {
    return (
      <StyledButtonBorder borderRadius={11}>
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
  text-align: center;
  
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
  position: ${(props) => props.position};
  right: ${(props) => props.right}px;
  top: ${(props) => props.top}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 162}px;
  border-radius: ${(props) => props.borderRadius || 30}px;
  padding: ${(props) => props.padding || 6}px;
  box-shadow: 3px 3px 6px #141628, -3px -3px 6px #3a4072;
`
