import React from 'react'
import { addDecorator } from '@storybook/react'
import Background from './background'
import GlobalStyles from '../src/GlobalStyles'

addDecorator((storyFn) => (
  <Background>
    <GlobalStyles />
    {storyFn()}
  </Background>
))
