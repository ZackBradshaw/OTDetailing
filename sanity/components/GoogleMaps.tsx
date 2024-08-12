import React from 'react';

const GoogleMaps = () => {
  return (
    <div className="flex items-center">
      <iframe
        className="w-72 h-40"
        frameBorder="0"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBE0K21JMmbww6mBP3fpmVRXeLX7G0AZAA&q=6334+West+Crystal+Lane,+Springfield,+MO&zoom=8&region=us`}
        allowFullScreen
      >
      </iframe>
      <div className="ml-5 text-b">
        <p>OT Detailing LLC.</p>
        <p>Providing reliable service since 2023</p>
        <p>6334 West Crystal Lane, Springfield, MO</p>
        <p>Phone: 417-942-9898</p>
      </div>
    </div>
  );
};

export default GoogleMaps;
