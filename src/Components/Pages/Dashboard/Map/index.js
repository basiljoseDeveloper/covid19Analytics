import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
let map = [];
const Maps = ({ data }) => {
  const [location, setLocation] = useState(["51.505", " -0.09"]);
  const [activeData, setActiveData] = useState("");
  const [selectedData, setSelectedData] = useState("");

  useEffect(() => {
    map = data.map((data1) => [data1.latitude, data1.longitude]);
    setLocation(map);
  }, [data]);
  const handleMarkerClick = (location) => {
    let selected = data.find((position) => {
      let position1 = [position.latitude, position.longitude];
      let is_same =
        position1.length === location.length &&
        position1.every((element, index) => {
          return element === location[index];
        });
      return is_same;
    });
    setSelectedData(selected);
    const markerData = selected && selected.result && selected.result[selected.result.length - 1];
    if (markerData) setActiveData(...Object.values(markerData));
  };

  return (
    <Map center={map && map[0]} zoom={3}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {location.map((location, index) => {
        return (
          <Marker key={index} position={location} onClick={() => handleMarkerClick(location)}>
            <Popup>
              {
                <span>
                  <span>
                    <h2>{selectedData && selectedData.location}</h2>
                    <ul>
                      <li>
                        <strong>Confirmed:</strong> {activeData.confirmed}
                      </li>
                      <li>
                        <strong>Deaths:</strong> {activeData.dead}
                      </li>
                      <li>
                        <strong>Recovered:</strong> {activeData.recovered}
                      </li>
                      <li>
                        <strong>Total Cases:</strong> {activeData.total}
                      </li>
                      <li>
                        <strong>Last Update:</strong> {selectedData && selectedData.updated}
                      </li>
                    </ul>
                  </span>
                </span>
              }
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
};

export default Maps;
