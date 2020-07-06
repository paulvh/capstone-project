import React from 'react';
import Header from '../Components/Header.js'

export default {
  title: 'Header',
  component: Header,
};

export const Header = () => <Header/>;

ToStorybook.story = {
  name: 'Header',
};
