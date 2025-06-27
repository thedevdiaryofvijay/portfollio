import React from 'react';
import './CircleLoader.css'; // optional if you prefer external styling

const CircleLoader = () => {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '1 / 1',
      position: 'relative',
      maxWidth: '500px', // optional max sizing
      margin: 'auto',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: '#D9D9D9',
          position: 'absolute',
        }}></div>

        <div style={{
          width: '98.5%',
          height: '98.5%',
          left: '0.75%',
          top: '0.75%',
          borderRadius: '50%',
          background: '#8FF5DA',
          position: 'absolute',
          animation: 'pulse 3s ease-in-out infinite',
        }}></div>

        <div style={{
          width: '85.7%',
          height: '85.7%',
          left: '7.15%',
          top: '7.15%',
          background: '#85A051',
          borderRadius: '50%',
          border: '1px solid black',
          position: 'absolute',
          animation: 'spin 8s linear infinite',
        }}></div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.03); opacity: 0.9; }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CircleLoader;
