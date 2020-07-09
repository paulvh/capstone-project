import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button.js'

export default {
  title: 'Button',
  component: Button,
}

export const Rectangular = () => (
  <Button isCircular={false} name="hello" onClick={action('clicked')} />
)

export const Circular = () => (
  <Button isCircular={true} name="hello" onClick={action('clicked')} />
)
