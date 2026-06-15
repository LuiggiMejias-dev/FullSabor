// src/components/ProductList/ProductList.jsx
import React from 'react';
import { ChevronLeft, SearchX } from 'lucide-react';
import { useCart } from '../../context/CartContext'; // IMPORTACIÓN DEL CONTEXTO
import './ProductList.css';

function ProductList({ products, categoryName, onBack }) {
  // Inicializamos la función para agregar al carrito
  const { addToCart } = useCart();

  return (
    <div className="product-list-wrapper">
      <header className="product-list-header">
        <button className="back-nav-chip" onClick={onBack}>
          <ChevronLeft size={16} /> Volver
        </button>
        <h2 className="current-category-title">{categoryName}</h2>
      </header>

      {products.length === 0 ? (
        <div className="no-results">
          <SearchX size={48} /> 
          <p>No encontramos platos disponibles en este momento.</p>
        </div>
      ) : (
        <div className="product-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-image-container">
                <img src={p.image} className="product-image" alt={p.name} />
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <p className="product-description">{p.description}</p>
                
                <div className="product-footer">
                  <span className="product-price">S/ {p.price.toFixed(2)}</span>
                  {/* BOTÓN CONECTADO AL CARRITO */}
                  <button 
                    className="add-to-cart-btn" 
                    onClick={() => addToCart(p)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;