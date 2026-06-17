import React from 'react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

function Navbar({ onOpenCart }) {
  const { cartCount } = useCart();
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Full<span className="logo-accent">Sabor</span></span>
      </div>
      <div className="navbar-cart">
        <button className="cart-button" onClick={onOpenCart}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;