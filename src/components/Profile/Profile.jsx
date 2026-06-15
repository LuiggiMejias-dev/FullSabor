import React, { useState } from 'react';
import { 
  IoLocationOutline, IoCardOutline, IoSettingsOutline, IoLogOutOutline, 
  IoArrowBack, IoCheckmarkCircleOutline, IoNotificationsOutline, 
  IoHelpCircleOutline, IoChevronForwardOutline, IoKeyOutline,
  IoPersonOutline, IoMailOutline, IoCallOutline, IoAddCircleOutline, IoLockClosedOutline 
} from 'react-icons/io5';
import './Profile.css';

function Profile() {
  const [view, setView] = useState('main');
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  // Estados para modales de direcciones
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const [paymentType, setPaymentType] = useState('tarjeta'); 
  const [settings, setSettings] = useState({ notifications: true, language: 'Español' });
  const [user, setUser] = useState({ 
    name: 'Luiggi Mejias', 
    email: 'luiggi@email.com', 
    phone: '+51 987 654 321' 
  });
  
  const [payments, setPayments] = useState([
    { id: 1, label: '💳 Visa **** 4455' },
    { id: 2, label: '💳 Mastercard **** 1122' }
  ]);

  const renderContent = () => {
    switch (view) {
      case 'addresses':
        return (
          <div className="sub-view">
            <h3>Mis Direcciones</h3>
            <div className="card-wrapper">
              <div className="card-item"><span>🏠 Casa: Av. Principal 123</span></div>
              <div className="card-item"><span>🏢 Oficina: Calle Lima 456</span></div>
              <button className="add-btn" onClick={() => setShowAddAddressModal(true)}>+ Añadir dirección</button>
            </div>
            <div className="card-wrapper" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
              <div style={{ color: '#dc2626' }}><IoLocationOutline size={30}/></div>
              <div>
                <h4 style={{ margin: 0, fontSize: '14px' }}>Dirección Principal</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Tus pedidos llegarán a: <strong>Av. Principal 123</strong></p>
              </div>
            </div>
            <div className="card-wrapper">
              <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Instrucciones de entrega</h4>
              <textarea className="input-field" placeholder="Ej: Tocar el timbre dos veces..." rows="3" style={{ marginBottom: '5px' }} />
              <button className="action-button" onClick={() => setShowSuccessModal(true)} style={{ marginTop: '5px' }}>Guardar preferencias</button>
            </div>
          </div>
        );
      case 'payments':
        return (
          <div className="sub-view">
            <h3>Métodos de Pago</h3>
            <div className="card-wrapper">
              {payments.map(p => (
                <div key={p.id} className="card-item">
                  <span>{p.label}</span>
                  <button className="del-btn" onClick={() => setPayments(payments.filter(item => item.id !== p.id))}>Eliminar</button>
                </div>
              ))}
              <button className="add-payment-card" onClick={() => setShowPaymentModal(true)}>
                <IoAddCircleOutline size={20}/> Añadir nuevo método
              </button>
            </div>
            <div className="card-wrapper">
              <h4 style={{ margin: '0 0 10px 0', fontSize: '15px' }}>¿Tienes un cupón de descuento?</h4>
              <input type="text" className="input-field" placeholder="Ingresa tu código aquí..." style={{ margin: '0 0 10px 0' }} />
              <button className="action-button" style={{ margin: 0 }}>Canjear cupón</button>
            </div>
            <div className="security-notice">
              <p><IoCheckmarkCircleOutline /> Tus datos están cifrados y seguros.</p>
              <p><IoLockClosedOutline /> No compartimos tu información con terceros.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="sub-view">
            <h3>Configuración</h3>
            <div className="settings-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span className="section-title" style={{ margin: 0 }}>Datos Personales</span>
                <button className="small-link" onClick={() => setShowEditProfileModal(true)}>Editar</button>
              </div>
              <div className="setting-item"><div className="setting-info"><IoPersonOutline size={20}/> <div><p>{user.name}</p><small>Nombre completo</small></div></div></div>
              <div className="setting-item"><div className="setting-info"><IoMailOutline size={20}/> <div><p>{user.email}</p><small>Correo electrónico</small></div></div></div>
              <div className="setting-item"><div className="setting-info"><IoCallOutline size={20}/> <div><p>{user.phone}</p><small>Número de celular</small></div></div></div>
            </div>
            <div className="settings-section">
              <span className="section-title">General</span>
              <div className="setting-item">
                <div className="setting-info"><IoNotificationsOutline size={20}/> <div><p>Notificaciones</p><small>Recibir alertas de pedidos</small></div></div>
                <input type="checkbox" className="toggle-switch" checked={settings.notifications} onChange={() => setSettings({...settings, notifications: !settings.notifications})} />
              </div>
            </div>
            <div className="settings-section">
              <span className="section-title">Seguridad</span>
              <div className="setting-item">
                <div className="setting-info"><IoKeyOutline size={20}/> <p>Cambiar contraseña</p></div>
                <button className="small-link" onClick={() => setShowPasswordModal(true)}>Editar</button>
              </div>
            </div>
            <div className="settings-section">
              <span className="section-title">Idioma</span>
              <div className="language-options">
                {['Español', 'English'].map((lang) => (
                  <button key={lang} className={`lang-btn ${settings.language === lang ? 'active' : ''}`} onClick={() => setSettings({...settings, language: lang})}>
                    {lang} {settings.language === lang && <IoCheckmarkCircleOutline size={18} color="#dc2626"/>}
                  </button>
                ))}
              </div>
            </div>
            <p className="app-version">Versión 1.0.2</p>
          </div>
        );
      case 'help':
  return (
    <div className="sub-view">
      <h3>Ayuda y Soporte</h3>
      
      {/* Sección visual de bienvenida */}
      <div className="help-hero">
        <IoHelpCircleOutline size={48} color="#dc2626" />
        <p>¿En qué podemos ayudarte hoy, {user.name.split(' ')[0]}?</p>
      </div>

      {/* FAQ con mejor estructura */}
      <div className="faq-section">
        <h4 style={{marginBottom: '15px'}}>Preguntas frecuentes</h4>
        {[
          { q: "¿Cómo rastreo mi pedido?", a: 'Ve a la pestaña "Historial" y haz clic en el seguimiento en tiempo real.' },
          { q: "¿Qué métodos de pago aceptan?", a: 'Aceptamos Visa, Mastercard, BCP, BBVA y efectivo contra entrega.' },
          { q: "¿Cómo cambio mi dirección?", a: 'En "Perfil > Mis Direcciones" puedes editar o agregar nuevas ubicaciones.' }
        ].map((item, index) => (
          <div key={index} className="faq-item">
            <p><strong>{item.q}</strong></p>
            <small style={{color: '#666'}}>{item.a}</small>
          </div>
        ))}
      </div>

      {/* Canales de Contacto con diseño de tarjetas */}
      <div className="contact-section">
        <h4>¿Sigues necesitando ayuda?</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
          <button className="contact-btn email">
            <IoMailOutline size={20} /> Enviar correo a soporte
          </button>
          <button className="contact-btn whatsapp">
            <IoCallOutline size={20} /> Chatear por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
      default:
        return (
          <div className="profile-options">
            <button className="option" onClick={() => setView('addresses')}><div className="option-label"><IoLocationOutline size={22}/> Mis direcciones</div><IoChevronForwardOutline/></button>
            <button className="option" onClick={() => setView('payments')}><div className="option-label"><IoCardOutline size={22}/> Métodos de pago</div><IoChevronForwardOutline/></button>
            <button className="option" onClick={() => setView('settings')}><div className="option-label"><IoSettingsOutline size={22}/> Configuración</div><IoChevronForwardOutline/></button>
            <button className="option" onClick={() => setView('help')}><div className="option-label"><IoHelpCircleOutline size={22}/> Ayuda y Soporte</div><IoChevronForwardOutline/></button>
            <button className="option logout" onClick={() => setShowLogoutModal(true)}><div className="option-label"><IoLogOutOutline size={22}/> Cerrar sesión</div></button>
          </div>
        );
    }
  };

  return (
    <div className="profile-container">
      {view !== 'main' && <button className="back-btn" onClick={() => setView('main')}><IoArrowBack size={20}/> Volver</button>}
      {view === 'main' && (
        <div className="profile-header">
          <div className="avatar">LM</div>
          <h3>{user.name}</h3>
          <div className="membership-card">
            <div className="membership-progress"><div className="fill"></div></div>
            <p>Usuario Premium (80% para Gold)</p>
          </div>
          <div className="stats-container">
            <div className="stat-box"><span>12</span> Pedidos</div>
            <div className="stat-box"><span>S/ 120</span> Ahorrado</div>
          </div>
        </div>
      )}
      {renderContent()}
      
      {/* --- MODALES --- */}
      {showLogoutModal && (
        <div className="modal-overlay"><div className="modal-content">
          <IoCheckmarkCircleOutline size={60} color="#15803d" />
          <h3>Sesión cerrada</h3>
          <p>Has cerrado sesión correctamente. ¡Esperamos verte pronto!</p>
          <button className="action-button" onClick={() => setShowLogoutModal(false)}>Entendido</button>
        </div></div>
      )}
      {showPasswordModal && (
        <div className="modal-overlay"><div className="modal-content">
          <h3>Cambiar Contraseña</h3>
          <input type="password" placeholder="Nueva contraseña" className="input-field" />
          <input type="password" placeholder="Confirmar contraseña" className="input-field" />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="action-button" onClick={() => setShowPasswordModal(false)}>Cancelar</button>
            <button className="action-button" onClick={() => setShowPasswordModal(false)}>Guardar</button>
          </div>
        </div></div>
      )}
      {showEditProfileModal && (
        <div className="modal-overlay"><div className="modal-content">
          <h3>Editar Perfil</h3>
          <input className="input-field" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Nombre completo" />
          <input className="input-field" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Correo electrónico" />
          <input className="input-field" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} placeholder="Número de celular" />
          <button className="action-button" onClick={() => setShowEditProfileModal(false)}>Guardar</button>
        </div></div>
      )}
      {showAddAddressModal && (
        <div className="modal-overlay"><div className="modal-content">
          <h3>Nueva Dirección</h3>
          <input className="input-field" placeholder="Nombre (Casa, Oficina)" />
          <input className="input-field" placeholder="Dirección detallada" />
          <button className="action-button" onClick={() => setShowAddAddressModal(false)}>Guardar</button>
        </div></div>
      )}
      {showSuccessModal && (
        <div className="modal-overlay"><div className="modal-content">
          <IoCheckmarkCircleOutline size={60} color="#15803d" />
          <h3>¡Guardado!</h3>
          <p>Tus preferencias se han actualizado.</p>
          <button className="action-button" onClick={() => setShowSuccessModal(false)}>Entendido</button>
        </div></div>
      )}
      {showPaymentModal && (
        <div className="modal-overlay"><div className="modal-content">
          <h3>Añadir Método</h3>
          <select className="input-field" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="transferencia">Transferencia Bancaria</option>
          </select>
          {paymentType === 'tarjeta' ? (
            <>
              <input type="text" className="input-field" placeholder="Número de tarjeta (16 dígitos)" />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input type="text" className="input-field" placeholder="MM/AA" />
                <input type="text" className="input-field" placeholder="CVV" />
              </div>
            </>
          ) : (
            <>
              <select className="input-field">
                <option>Seleccionar Banco</option>
                <option>BCP</option>
                <option>BBVA</option>
                <option>Interbank</option>
              </select>
              <input type="text" className="input-field" placeholder="Número de cuenta o CCI" />
            </>
          )}
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button className="action-button" onClick={() => setShowPaymentModal(false)}>Cancelar</button>
            <button className="action-button" onClick={() => setShowPaymentModal(false)}>Guardar</button>
          </div>
        </div></div>
      )}
    </div>
  );
}

export default Profile;