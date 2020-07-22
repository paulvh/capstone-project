import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from './Button'
import styled from 'styled-components'

export default function Footer({
  currentPage,
  saveFunction,
  setEditedInterface,
  userinterface,
}) {
  const pageNames = ['userinterface', 'editUserinterface', 'addElement']
  const history = useHistory()

  if (currentPage === pageNames[0]) {
    return (
      <StyledFooter>
        <Button
          type="misc"
          name="Edit"
          onClick={() => {
            setPathto('/editUI')
            setEditedInterface(userinterface)
          }}
        />
      </StyledFooter>
    )
  }
  if (currentPage === pageNames[1]) {
    return (
      <StyledFooter>
        <Button type="misc" name="Back" onClick={() => setPathto('/')} />
        <Button type="misc" name="Save" onClick={saveFunction} />
      </StyledFooter>
    )
  }
  if (currentPage === pageNames[2]) {
    return (
      <StyledFooter>
        <Button type="misc" name="Back" onClick={() => setPathto('/editUI')} />
        <Button type="misc" name="Add" form="addElement" />
      </StyledFooter>
    )
  }

  function setPathto(path) {
    history.push(path)
  }
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`
