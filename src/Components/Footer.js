import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

export default function Footer({ currentPage }) {
  const pageNames = ['userinterface', 'editUserinterface', 'addButtonGroup']

  if (currentPage === pageNames[0]) {
    return <NavLink to="/editUI">Edit</NavLink>
  }
  if (currentPage === pageNames[1]) {
    return (
      <>
        <NavLink to="/">Back</NavLink>
        <Button type="misc" name="Save" />
      </>
    )
  }
  if (currentPage === pageNames[2]) {
    return (
      <>
        <NavLink to="/editUI">Back</NavLink>
        <Button type="misc" name="Add" form="addButton" />
      </>
    )
  }
}
