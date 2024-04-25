import React, { useEffect } from 'react';

export const Fullscreen = () => {
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
  <div class="ibe" data-region="emea" data-widget="embed"></div>
   
  </div>
);
};

    