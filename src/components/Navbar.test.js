import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should render the component', () => {
    const output = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });
});
