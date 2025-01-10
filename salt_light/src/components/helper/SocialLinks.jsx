import React from 'react';

import facebook from '/facebook.webp'
import instagram from '/instagram.webp'
import x from '/x.webp'
import linkedin from '/linkedin.webp'


export function SocialLinks(){
  return (
    <div className="flex gap-5 space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img
          src={facebook}
          alt="Facebook"
          className="w-8 h-8"
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img
          src={x}
          alt="Twitter"
          className="w-8 h-8"
        />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src={instagram}
          alt="Instagram"
          className="w-8 h-8"
        />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img
          src={linkedin}
          alt="LinkedIn"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

