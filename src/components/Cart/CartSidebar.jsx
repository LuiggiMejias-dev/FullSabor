import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartSidebar.css';

function CartSidebar({ isOpen, onClose }) {
  const { cart, total, addToCart, decreaseFromCart, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Tu Pedido</h3>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? <p className="empty-msg">Tu carrito está vacío</p> : 
           cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-name">{item.name}</span>
              
              <div className="qty-controls">
                <button className="qty-btn" onClick={() => decreaseFromCart(item.id)}><Minus size={12} /></button>
                <span className="item-qty-text">{item.quantity}</span>
                <button className="qty-btn" onClick={() => addToCart(item)}><Plus size={12} /></button>
              </div>

              <div className="price-col">
                <span className="item-price">S/ {(item.price * item.quantity).toFixed(2)}</span>
                <button className="trash-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={14} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total a pagar:</span>
            <strong>S/ {total.toFixed(2)}</strong>
          </div>
          <button className="checkout-btn">Finalizar Pedido</button>
        </div>
      </div>
    </div>
  );
}
export default CartSidebar;