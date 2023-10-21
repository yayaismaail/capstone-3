import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Navbar1 from '../Navbar1';

import { fetchCities } from '../../redux/home/homeSlice';

function WeatherPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <Navbar1 />
      <FontAwesomeIcon
        icon={faCloud}
        className="weather"
      />
      <h2 className="heading">Weather</h2>
      <p className="cat">4 stats</p>
      <p className="stats">WEATHER STATS</p>
      <ul>
        <li className="list">
          <p>Main</p>
          {' '}
          {data?.weather?.[0]?.main}
        </li>
        <li className="list">
          <p>Description</p>
          {' '}
          {data?.weather?.[0]?.description}
        </li>
        <li className="list">
          <p>Cloud</p>
          {' '}
          {data.cod}
          {' '}
          oktas
        </li>
        <li className="list">
          <p>Visibility</p>
          {' '}
          {data.visibility}
          {' '}
          m
        </li>
      </ul>
    </div>
  );
}

export default WeatherPage;
