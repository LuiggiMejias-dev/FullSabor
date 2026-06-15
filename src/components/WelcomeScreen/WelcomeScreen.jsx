// src/components/WelcomeScreen/WelcomeScreen.jsx
import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-overlay">
        <div className="welcome-branding">
          <span className="welcome-logo">Come<span className="logo-red-accent">Pe</span></span>
          <p className="welcome-tagline">El verdadero sabor peruano</p>
        </div>

        <div className="welcome-card">
          <h1>¡Bienvenido!</h1>
          <p>¿Qué delicia peruana vas a ordenar hoy?</p>
          <button className="start-button" onClick={onStart}>
            Ver Menú ➔
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;