import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, faCloud, faWind, faSun, faThermometerHalf,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { fetchCities } from '../redux/home/homeSlice';
import './Homes.css';

function Homes() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { data, status, error } = useSelector((state) => state.home) || {};

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="loading">Loading... please wait</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  function getFontAwesomeIcon(index) {
    if (index === 0) return faMapMarkerAlt;
    if (index === 1) return faCloud;
    if (index === 2) return faThermometerHalf;
    if (index === 3) return faWind;
    return faSun;
  }

  function getClassNames(index) {
    const classNames = [`home-item link-${index}`];
    if (index % 2 !== 0) {
      classNames.push('even');
    }
    return classNames.join(' ');
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = [
    { link: '/coordinates', dataKey: 'coord', label: 'Coordinates' },
    { link: '/weather', dataKey: 'weather', label: 'Weather' },
    { link: '/temperature', dataKey: 'main', label: 'Temperature' },
    { link: '/wind', dataKey: 'wind', label: 'Wind' },
    { link: '/system', dataKey: 'sys', label: 'System' },
  ].filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div>
        <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <h1 className="heading">Lagos, Nigeria</h1>
        <p className="cat">
          {`${((Math.floor(data.timezone / 3600)) >= 0 ? '+' : '-')
         + (Math.abs(Math.floor(data.timezone / 3600))).toString().padStart(2, '0')}.
         ${Math.abs(Math.floor(data.timezone % (3600 / 60))).toString().padStart(2, '0')} UTC`}
        </p>
      </div>
      <p className="stats">STATS BY CATEGORY</p>
      <div className="home-items">
        {filteredItems.map((item, index) => (
          <Link key={item.link} to={item.link}>
            {data[item.dataKey] && (
              <p className={getClassNames(index)}>
                <FontAwesomeIcon icon={getFontAwesomeIcon(index)} className="instruments" />
                <span className="item-wrap">
                  {item.label}
                  <span className="item">
                    {Object.keys(data[item.dataKey]).length}
                    items
                  </span>
                </span>
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Homes;
