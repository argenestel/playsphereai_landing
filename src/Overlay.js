import React from 'react';

export default function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px', pointerEvents: 'auto' }}>
        Playsphere
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)', textAlign: 'center' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '8em', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: '1.2' }}>
          Coming Soon
        </h1>
        <p style={{ fontSize: '1.5em', marginTop: '30px' }}>
          Creating personalized experiences in games with AI
        </p>
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1em',
            color: 'white',
            backgroundColor: '#ffa0e0',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            pointerEvents: 'auto'
          }}
        >
          Join the Waitlist
        </button>
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        &copy; 2023 Playsphere
      </div>
    </div>
  );
}
