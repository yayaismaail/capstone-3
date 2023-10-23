import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

describe('About', () => {
  it('should render the about page with correct heading and text', () => {
    const output = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });

  it('should render a link with a back arrow icon', () => {
    const output = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });
});
