import React from 'react';
import { Home, LayoutGrid, Clock, User } from 'lucide-react'; // Importamos los iconos
import './BottomNav.css';

function BottomNav({ activeTab, onNavigate }) {
  return (
    <nav className="bottom-nav">
      <div 
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} 
        onClick={() => onNavigate('home')}
      >
        <Home size={22} className="nav-icon" />
        <span>Inicio</span>
      </div>
      
      <div 
        className={`nav-item ${activeTab === 'categories' ? 'active' : ''}`} 
        onClick={() => onNavigate('categories')}
      >
        <LayoutGrid size={22} className="nav-icon" />
        <span>Categorías</span>
      </div>
      
      <div 
        className={`nav-item ${activeTab === 'history' ? 'active' : ''}`} 
        onClick={() => onNavigate('history')}
      >
        <Clock size={22} className="nav-icon" />
        <span>Historial</span>
      </div>
      
      <div 
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} 
        onClick={() => onNavigate('profile')}
      >
        <User size={22} className="nav-icon" />
        <span>Perfil</span>
      </div>
    </nav>
  );
}

export default BottomNav;