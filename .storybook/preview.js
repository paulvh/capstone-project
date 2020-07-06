import React from 'react';
import { addDecorator } from '@storybook/react';
import Background from './background';

addDecorator(storyFn => <Background>{storyFn()}</Background>);
