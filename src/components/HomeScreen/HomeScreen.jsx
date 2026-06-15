import React, { useState } from 'react';
import { IoTimeOutline, IoChevronDownOutline, IoCloseOutline, IoCalendarOutline, IoGiftOutline } from 'react-icons/io5';
import './HomeScreen.css';
import causaImg from '../../assets/causa.jpg';
import lomoImg from '../../assets/lomo.jpg';

function HomeScreen() {
  const [modalType, setModalType] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const popularItems = [
    { id: 1, name: 'Causa Limeña', price: 'S/ 18.00', img: causaImg },
    { id: 2, name: 'Lomo Saltado', price: 'S/ 28.00', img: lomoImg },
  ];

  const menuDelDia = [
    { id: 'm1', name: 'Menú Ejecutivo', price: 'S/ 15.00', desc: 'Entrada: Sopa criolla. Fondo: Ají de gallina. Incluye: Refresco de maracuyá y postre del día.' },
    { id: 'm2', name: 'Menú Light', price: 'S/ 18.00', desc: 'Entrada: Ensalada cesar. Fondo: Pollo a la plancha con verduras al vapor. Incluye: Jugo verde.' },
  ];

  const openMenuModal = (menu) => {
    setSelectedMenu(menu);
    setModalType('menu');
  };

  return (
    <div className="home-screen">
      <section className="welcome-banner">
        <h1>¡Buen provecho! 🍽️</h1>
        <p>¿Qué se te antoja comer hoy?</p>
      </section>

      <section className="home-tools">
        <div className="status-badge" onClick={() => setModalType('hours')}>
          {/* Icono de tiempo */}
          <IoTimeOutline size={16} /> Local abierto • Pedidos listos en 30-45 min <IoChevronDownOutline size={14} />
        </div>
      </section>

      <section className="popular-section">
        <h2>Lo más pedido</h2>
        <div className="popular-grid">
          {popularItems.map(item => (
            <div key={item.id} className="popular-card">
              <img src={item.img} alt={item.name} />
              <div className="popular-info">
                <h4>{item.name}</h4>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-day-section">
        {/* Icono de calendario usando react-icons */}
        <h2>Menú del día <IoCalendarOutline size={20} style={{verticalAlign: 'middle'}}/></h2>
        <div className="menu-list">
          {menuDelDia.map(item => (
            <div key={item.id} className="menu-item" onClick={() => openMenuModal(item)}>
              <div className="menu-details">
                <h4>{item.name}</h4>
                <p>{item.desc.substring(0, 40)}...</p>
              </div>
              <span className="menu-price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-card" onClick={() => setModalType('promo')}>
        <h3>¿Nuevo aquí? <IoGiftOutline /></h3>
        <p>Haz clic para ver una sorpresa del día.</p>
      </section>

      {modalType && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setModalType(null)}>
              <IoCloseOutline size={24} />
            </button>

            {modalType === 'menu' && selectedMenu ? (
              <>
                <h2>{selectedMenu.name}</h2>
                <p className="menu-full-desc">{selectedMenu.desc}</p>
                <div className="coupon-code">{selectedMenu.price}</div>
                <button className="add-button" onClick={() => setModalType(null)}>Agregar al pedido</button>
              </>
            ) : modalType === 'promo' ? (
              <>
                <h2>¡Bienvenido! 🎉</h2>
                <p>Disfruta de un <strong>20% de descuento</strong> con el código:</p>
                <div className="coupon-code">BIENVENIDO20</div>
              </>
            ) : (
              <>
                <h2>Horario de atención <IoTimeOutline size={22}/></h2>
                <p>Estamos disponibles:</p>
                <div className="hours-info">Lunes a Domingo<br /><strong>9:00 AM - 10:00 PM</strong></div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;