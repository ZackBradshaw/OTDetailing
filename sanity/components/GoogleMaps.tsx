import React from 'react';

const GoogleMaps = () => {
  return (
    <div className='flex-row align-center max-w-screen-2x1 h-[300px]'>
      <div className="flex-column content-center ">
        <iframe
          className="w-720 h-400"
          frameBorder="0"
          style={{ 
            width: "50%",
            height: "50%",
            marginLeft: "25%"
          }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBE0K21JMmbww6mBP3fpmVRXeLX7G0AZAA&q=6334+West+Crystal+Lane,+Springfield,+MO&zoom=8&region=us`}
          allowFullScreen
        >
        </iframe>
      <div className="ml-5 text-black text-center">
          <p>OT Detailing LLC.<br />Providing reliable service since 2023</p>
          <a href="https://www.google.com/maps/place/6334+Crystal+Ln+W,+Springfield,+MO+65803/@37.2524852,-93.4165504,17z/data=!3m1!4b1!4m6!3m5!1s0x87c58aa95c99477d:0xc473c648ed860d0a!8m2!3d37.252481!4d-93.4139755!16s%2Fg%2F11crsgtmpl" target='_blank'>6334 West Crystal Lane, Springfield, MO</a><br />
          <a href="tel:417-942-9898">Phone: 417-942-9898</a>
      </div>
    </div>
  </div>
  );
};

export default GoogleMaps;
