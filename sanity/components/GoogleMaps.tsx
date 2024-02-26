
        import React from 'react';

        const GoogleMaps = () => {
          return (
            <iframe
              width="450"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=6334+West+Crystal+Lane,+Springfield,+MO&zoom=8&region=us`}
              allowFullScreen
            >
            </iframe>
          );
        };

        export default GoogleMaps;
