import React, { useEffect } from 'react';

export const Calander = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.siteminder.com/ibe.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
  <div class="ibe" data-widget="property_check_availability" data-clientid="{your client ID}"></div>

   
  </div>
);
};

    