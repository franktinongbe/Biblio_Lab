import React from 'react';

const NewsTicker = ({ message }) => {
  if (!message) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #1D4F9A, #f2994a)',
      color: 'white',
      padding: '8px 0',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1000,
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    }}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .marquee-text {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 25s linear infinite;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.9rem;
          }
        `}
      </style>
      <div className="marquee-text">
        {message} &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; {message} &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; {message}
      </div>
    </div>
  );
};

export default NewsTicker;