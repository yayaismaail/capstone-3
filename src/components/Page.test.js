import { render } from '@testing-library/react'; // Import screen
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('should render Navbar1 and a message indicating a 404 error', () => {
    const output = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    expect(output).toMatchSnapshot();
  });
});
