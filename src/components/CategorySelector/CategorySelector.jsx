// src/components/CategorySelector/CategorySelector.jsx
import React from 'react';
import './CategorySelector.css';

function CategorySelector({ activeCategory, setActiveCategory }) {
  // Lista de categorías que tenemos disponibles
  const categories = ["Todos", "Entradas", "Fondos", "Marinos", "Bebidas", "Postres"];

  return (
    <div className="category-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;