import React from 'react'
import { MapContainer , TileLayer , Marker } from 'react-leaflet';
import L from 'leaflet'

function Map( props ) {
    const pinPosition ={...props.pos.position}
    const setPinPosition = props.pos.setPosition

    const markerIcon = new L.Icon({
        iconUrl: require('../pin.png'),
        iconSize: [35,35],
        iconAnchor: [15,35]
    })
    const handleMarkerClick = (e) =>{
            setPinPosition({lat: e.latlng.lat, lng: e.latlng.lng});
            console.log(pinPosition)
        };
    
    return (
    <MapContainer center={[pinPosition.lat , pinPosition.lng]} scrollWheelZoom={true} zoom={props.zoom}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=Oit4P7jQ6E8Q7Bt7LYKx"/>
        <Marker 
            position={[pinPosition.lat , pinPosition.lng]} 
            icon={markerIcon} 
            draggable={true}
            eventHandlers={{
                click: handleMarkerClick,
            }}
            >   
        </Marker>
            
    </MapContainer>
  )
}

export default Map