
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
        className="calendly-inline-widget  min-w-[320px=] h-[630px]"
        data-url="https://calendly.com/zackzbradshaw" 
      ></div>
    </div>
  );
  
};

export default CalendlyEmbed;

