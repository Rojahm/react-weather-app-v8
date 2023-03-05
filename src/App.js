import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const geoApi = navigator.geolocation;
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  function handleCurrentLocation(event) {
    event.preventDefault();
    geoApi.getCurrentPosition((position) => {
      const { coords } = position;
      setLat(coords.latitude);
      setLon(coords.longitude);
    });
  }
  return (
    <div className="App">
      <h1>hello from app</h1>
      <h2>{lat}</h2>
      <h2>{lon}</h2>
      <button className="btn btn-primary" onClick={handleCurrentLocation}>
        current
      </button>
      <button className="btn btn-primary">search</button>
    </div>
  );
}

export default App;
