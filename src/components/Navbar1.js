import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar1 = () => (
  <nav className="nav">
    <Link to="/"><FontAwesomeIcon icon={faChevronLeft} className="angle-left" data-testid="back-link" /></Link>
    <p className="details">details</p>
    <div>
      <FontAwesomeIcon icon={faMicrophone} className="microphoneIcon" data-testid="microphone-icon" />
      <FontAwesomeIcon
        icon={faGear}
        className="gearIcon"
        data-testid="gear-icon"
      />
    </div>
  </nav>
);

export default Navbar1;
