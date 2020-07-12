import React, { useState, useEffect } from 'react'

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
      <input
        name="name"
        type="text"
        value={props.name}
        onChange={handleChange}
        placeholder="Button-Name..."
        required
      ></input>
      <input
        name="message"
        type="text"
        value={props.message}
        onChange={handleChange}
        placeholder="Button-Message..."
        required
      ></input>
    </>
  )

  function handleChange(event) {
    setProps({ ...props, [event.target.name]: event.target.value })
  }
}
