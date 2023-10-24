import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMicrophone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ searchTerm, handleSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="nav">
      <Link to="/about">
        <FontAwesomeIcon
          icon={faBars}
          className="bars"
        />
      </Link>
      <div>
        <FontAwesomeIcon
          icon={faMicrophone}
          className="microphoneIcon"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="magnifying-glass"
          onClick={toggleSearch}
        />
        {showSearch && (
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
