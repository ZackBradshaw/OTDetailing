
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
      {/*<div*/}
      {/*  className="calendly-inline-widget  min-w-[320px=] h-[630px]"*/}
      {/*  data-url="https://calendly.com/zackzbradshaw" */}
      {/*></div>*/}
      <a href="https://www.picktime.com/a4bd3161-2818-4424-a180-05db1c692c21" className="ptbkbtn float-center" target="_blank"
         >
        <img border="none"
            src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-gray.png"
            alt="Book an appointment with OTDetail" />
      </a>
    </div>
  );
  
};

export default CalendlyEmbed;

