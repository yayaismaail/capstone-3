import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar1 from './Navbar1';

describe('Navbar1', () => {
  test('renders Navbar1 component', () => {
    const output = render(
      <BrowserRouter>
        <Navbar1 />
      </BrowserRouter>,
    );
    expect(output).toMatchSnapshot();
  });
});
