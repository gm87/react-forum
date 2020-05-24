import React from 'react';
import { render } from '@testing-library/react';
import Home from '../App/Home';

import '@testing-library/jest-dom/extend-expect'
// learn more: https://github.com/testing-library/jest-dom

test('renders without crashing', () => {
  render(<Home />)
})