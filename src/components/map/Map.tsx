import React from 'react';
import { TileLayer, Popup, Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import StyledMapContainer from './mapStyles';

interface IProps {
  loc: LatLngTuple;
  office: string;
  street: string;
  city: string;
}

const Map = function ({ loc, office, street, city }: IProps) {
  return (
    <StyledMapContainer center={loc} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={loc}>
        <Popup>
          <h2>{office}</h2>
          <p>{street}</p>
          <p>{city}</p>
        </Popup>
      </Marker>
    </StyledMapContainer>
  );
};

export default Map;
