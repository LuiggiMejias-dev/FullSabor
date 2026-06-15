import React from 'react';
import { IoFastFoodOutline, IoRestaurantOutline, IoFishOutline, IoBeerOutline, IoIceCreamOutline } from 'react-icons/io5';
import './CategoryGrid.css';

function CategoryGrid({ onSelectCategory }) {
  const categories = [
    { id: 'Entradas', name: 'Entradas', icon: <IoFastFoodOutline size={24}/>, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80' },
    { id: 'Fondos', name: 'Platos de Fondo', icon: <IoRestaurantOutline size={24}/>, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80' },
    { id: 'Marinos', name: 'Pescados y Mariscos', icon: <IoFishOutline size={24}/>, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80' },
    { id: 'Bebidas', name: 'Bebidas', icon: <IoBeerOutline size={24}/>, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80' },
    { id: 'Postres', name: 'Postres', icon: <IoIceCreamOutline size={24}/>, image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80' }
  ];

  return (
    <div className="category-container">
      <div className="category-card-grid">
        {categories.map(cat => (
          <div key={cat.id} className="category-main-card" onClick={() => onSelectCategory(cat.id)}>
            <img src={cat.image} className="category-bg-img" alt={cat.name} />
            <div className="category-card-overlay">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                {cat.icon}
                <h3>{cat.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;