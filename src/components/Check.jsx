import React, { useEffect } from 'react';

export const Check = () => {
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
     <div className="ibe" data-widget="property_grid" data-clientid="{your client ID}"></div> 
   
  </div>
);
};
