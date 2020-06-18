import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { temperatureSelector, airPressureSelector, humiditySelector } from '../store/app.selectors';
import { changeTemperature, changeAirPressure, changeHumidity } from '../store/app.actions';

import './Dashboard.css';

function Dashboard() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeTemperature(100));
    dispatch(changeAirPressure(100));
    dispatch(changeHumidity(100));
  }, [dispatch]);

  const { temperature } = useSelector(temperatureSelector);
  const { airPressure } = useSelector(airPressureSelector);
  const { humidity } = useSelector(humiditySelector);

  return (
    <div className="container">
      <div className="item">Temperature: <span>{temperature}</span></div>
      <div className="item">Air pressure: <span>{airPressure}</span></div>
      <div className="item">Humidity: <span>{humidity}</span></div>
    </div>
  );
}

export default Dashboard;
