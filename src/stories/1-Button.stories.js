import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Components/Button.js';

export default {
  title: 'Button',
  component: Button,
};

export const Circular = () => (<Button circularButton={false} buttonName='hello' onClickFunction={action('clicked')} />);

export const Rectangular = () => (<Button circularButton={true} buttonName='hello' onClickFunction={action('clicked')} />);
