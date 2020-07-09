import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  const [userInterface, setUserInterface] = useState(true)
  return (
    <>
      {userInterface ? (
        <NavLink to="/editUI" onClick={() => setUserInterface(false)}>
          Edit
        </NavLink>
      ) : (
        <NavLink to="/" onClick={() => setUserInterface(true)}>
          Save
        </NavLink>
      )}
    </>
  )
}
