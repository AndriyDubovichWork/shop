import React, { useState } from 'react';

import MapPicker from 'react-google-map-picker';

const DefaultLocation = { lat: 50.45520637381399, lng: 30.534433174525564 };
const DefaultZoom = 4;

const ChooseLocation = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat: any, lng: any) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom: any) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <MapPicker
      defaultLocation={defaultLocation}
      zoom={zoom}
      style={{ height: '700px' }}
      onChangeLocation={handleChangeLocation}
      onChangeZoom={handleChangeZoom}
      apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'
    />
  );
};

export default ChooseLocation;
