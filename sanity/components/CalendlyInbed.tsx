
import React, { useEffect } from 'react';

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="calendly-inline-widget min-w-[320px=] h-[630px]"
        data-url="https://calendly.com/zackzbradshaw"
      ></div>
      <iframe width='100%' height='750px'
              src='https://zackbradshaw.zohobookings.com/portal-embed#/customer/4504693000000031018' frameBorder='0'
              allowFullScreen=''> 
      </iframe>
    </div>
  );
};

export default CalendlyEmbed;

