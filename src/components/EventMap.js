import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordenadas de Brasília
const center = [-15.788254294251782, -47.897449239517194];

// Pontos aleatórios dentro de Brasília (coordenadas fictícias para eventos)
const eventLocations = [
  { name: 'Evento 1', coordinates: [-15.7833, -47.9292] },
  { name: 'Evento 2', coordinates: [-15.788054874397519, -47.90057744040728] },
  { name: 'Evento 3', coordinates: [-15.7689, -47.9734] },
  { name: 'Evento 4', coordinates: [-15.784173430988718, -47.8994177577007] },
  { name: 'Evento 5', coordinates: [-15.71080352397869, -47.9106985195789] },
  { name: 'Evento 6', coordinates: [-15.757, -47.921] },
  { name: 'Evento 7', coordinates: [-15.7991, -47.8673] },
  { name: 'Evento 8', coordinates: [-15.8034, -47.9055] },
  { name: 'Evento 9', coordinates: [-15.7932, -47.9058] },
  { name: 'Evento 10', coordinates: [-15.7703, -47.9391] },
];

const EventMap = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={center} zoom={11} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Adicionando marcadores aleatórios */}
        {eventLocations.map((event, index) => (
          <Marker
            key={index}
            position={event.coordinates}
            icon={new Icon({
              iconUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/map-pin-icon.png',
              iconSize: [25, 25],
            })}>
            <Popup>
              {event.name} - Evento de Inovação e Tecnologia
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
    </div>
  );
};

export default EventMap;