import React from 'react';

export function SocialLinks(){
  return (
    <div className="flex gap-5 space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          className="w-8 h-8"
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_logo_2012.svg"
          alt="Twitter"
          className="w-8 h-8"
        />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="w-8 h-8"
        />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2013.png"
          alt="LinkedIn"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

