import { render, screen } from '@testing-library/react'; // Import screen
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('should render Navbar1 and a message indicating a 404 error', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument(); // Use screen.getByText
    expect(screen.getByText('The page you are looking for could not be found.')).toBeInTheDocument(); // Use screen.getByText
  });
});
