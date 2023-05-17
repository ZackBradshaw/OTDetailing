import React, { useEffect } from 'react';

const BookingComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.picktime.com/assets/booking.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, []); // Empty dependency array ensures this runs on mount and unmount only

  return (
    <>
    <a href='https://www.picktime.com/a4bd3161-2818-4424-a180-05db1c692c21' className='w-full ptbkbtn' target='_blank'>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '80%',
        zIndex: 1,
        opacity: 0 // you can set this to 0 to make the button invisible
      }}>
      </div>
    </a>
    </>
  );
}

export default BookingComponent;


