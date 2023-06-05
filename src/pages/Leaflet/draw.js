import React, { useState } from "react";
import Header from "components/Header";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import { MapContainer as  Map, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

import ExternalInfo from "components/ExternalInfo";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const DrawMap = () => {
  const [center, setCenter] = useState( { lat: 19.0760, lng: 72.8777 });
  const ZOOM_LEVEL = 12;
  const mapRef = useRef();

  const _created = (e) => console.log(e);

  return (
    <>
      <Header title="Drishti" />

      <ExternalInfo page="leafletDraw" />

      <div className="row">
        <div className="col text-center">
          <h2> Draw shapes on map</h2>

          <div className="col">
            <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            
              <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_created}
                  draw={
                    {
                      /* rectangle: false,
                    circle: false,
                    circlemarker: false,
                    marker: false,
                    polyline: false, */
                    }
                  }
                />
              </FeatureGroup>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawMap;
