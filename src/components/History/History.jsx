import React, { useState } from 'react';
import { X, RotateCcw, Package, CreditCard, Plus } from 'lucide-react';
import './History.css';

function History() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const mockOrders = [
    { id: 'CP-8492', date: '04 Jun, 10:30 AM', total: 'S/ 42.50', status: 'Pendiente',
      items: [
        { name: 'Cebiche Mixto', qty: 1, price: '38.00' }, 
        { name: 'Inca Kola 1L', qty: 1, price: '4.50' }
      ] 
    },
    { id: 'CP-7721', date: '02 Jun, 02:15 PM', total: 'S/ 28.00', status: 'Entregado',
      items: [{ name: 'Pollo a la Brasa (1/4)', qty: 2, price: '14.00' }] 
    }
  ];

  return (
    <div className="history-container">
      <h2 className="history-title">Mis Pedidos</h2>
      
      <div className="orders-list">
        {mockOrders.map((order) => (
          <div key={order.id} className="order-card" onClick={() => setSelectedOrder(order)}>
            <div className="order-header">
              <span className="order-id">#{order.id}</span>
              <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
            </div>
            <div className="order-details">
              <span className="order-date">{order.date}</span>
              <span className="order-total">{order.total}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Principal: Detalles */}
      {selectedOrder && !showPaymentModal && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="detail-title">Detalle del Pedido</h3>
              <button className="close-btn" onClick={() => setSelectedOrder(null)}><X size={20} /></button>
            </div>
            
            <div className="ticket-body">
              <div className="ticket-header-info">
                 <Package size={40} color="#dc2626" />
                 <span className="order-id-large">{selectedOrder.id}</span>
                 <span className="ticket-date">{selectedOrder.date}</span>
              </div>
              
              <ul className="items-list">
                {selectedOrder.items.map((item, i) => (
                  <li key={i}>
                    <span>{item.qty}x {item.name}</span>
                    <span>S/ {item.price}</span>
                  </li>
                ))}
              </ul>
              
              <div className="ticket-footer">
                <span>{selectedOrder.status === 'Entregado' ? 'Estado' : 'Total'}</span>
                <span className={`total-price ${selectedOrder.status === 'Entregado' ? 'paid' : ''}`}>
                  {selectedOrder.status === 'Entregado' ? 'Pagado' : selectedOrder.total}
                </span>
              </div>
              
              <button className="repeat-order-btn" onClick={selectedOrder.status === 'Pendiente' ? () => setShowPaymentModal(true) : null}>
                {selectedOrder.status === 'Entregado' ? <><RotateCcw size={16}/> Volver a pedir</> : <><CreditCard size={16}/> Pagar ahora</>}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Secundario: Pago */}
      {showPaymentModal && (
        <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header"><h3>Método de pago</h3><button className="close-btn" onClick={() => setShowPaymentModal(false)}><X size={20}/></button></div>
            <div className="payment-options">
              <button className="pay-option"><CreditCard size={20}/> Visa **** 4455</button>
              <button className="pay-option"><CreditCard size={20}/> Mastercard **** 1122</button>
              <button className="pay-option add-new"><Plus size={20}/> Agregar nueva tarjeta</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default History;