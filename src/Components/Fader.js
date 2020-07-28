import React from 'react'
import styled from 'styled-components'

export default function Fader({
  variables = { name: '', min: 0, max: 100 },
  sendMessage = () => console.log(),
}) {
  return (
    <>
      <StyledLabel>
        <h4>{variables.name}</h4>
        <input
          className="styledFader"
          type="range"
          min={variables.min}
          max={variables.max}
          /* value={variables.min} */
          onChange={onChange}
        />
      </StyledLabel>
    </>
  )

  function onChange(event) {
    const message = variables.name + '-' + event.target.value
    sendMessage(message)
  }
}

const StyledLabel = styled.label`
  background: #272b4d;
  box-shadow: 3px 3px 6px #141628, -3px -3px 6px #3a4072;
  padding: 10px;
  height: 80px;
  border-radius: 10px;
  text-align: center;
  width: 280px;

  h4 {
    margin-bottom: 10px;
  }

  input[type='range'] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #0bfbf8;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    box-shadow: inset 4px 4px 6px #068583, inset -4px -4px 6px #10ffff;
    background: #0bfbf8;
    border-radius: 5px;
    border: 0.2px solid #010101;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #f65164;
    height: 25px;
    width: 35px;
    border-radius: 3px;
    background: linear-gradient(145deg, #ff576b, #dd495a);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -9px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #0bfbf8;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    box-shadow: inset 4px 4px 6px #068583, inset -4px -4px 6px #10ffff;
    background: #0bfbf8;
    border-radius: 5px;
  }
  input[type='range']::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #f65164;
    height: 25px;
    width: 35px;
    border-radius: 3px;
    background: linear-gradient(145deg, #ff576b, #dd495a);
    cursor: pointer;
  }
`
