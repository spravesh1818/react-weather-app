function TempCard(props) {
  return (
    <div className="tempCard">
      <div>
        <img
          alt="weather_icon"
          className="weatherIcon"
          src={`${process.env.REACT_APP_WEATHER_ICON_STATIC_IMAGE_ROUTE}/${props.icon}@4x.png`}
        />
        <p className="tempStatus">{props.status}</p>
      </div>

      <div className="temperatureData">
        <h2> {props.temp} </h2>
        <h2>&deg;C</h2>
      </div>
      <div className="">
        <h4>Humidity:{props.humidity}%</h4>
        <h4>Wind:{props.wind} km/hr</h4>
      </div>
    </div>
  );
}

export default TempCard;
