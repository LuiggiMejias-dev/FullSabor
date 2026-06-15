import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BottomNav from './components/Navbar/BottomNav';
import ProductList from './components/ProductList/ProductList';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import Profile from './components/Profile/Profile'; 
import History from './components/History/History';
import HomeScreen from './components/HomeScreen/HomeScreen';
import CartSidebar from './components/Cart/CartSidebar'; // IMPORTAR NUEVO
import { FOOD_DATA } from './data';
import { CartProvider } from './context/CartContext'; 

function App() {
  const [screen, setScreen] = useState('welcome');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false); // ESTADO PARA EL CARRITO

  const filteredProducts = FOOD_DATA.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <CartProvider>
      <div className="app-container">
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        {screen === 'welcome' ? (
          <WelcomeScreen onStart={() => setScreen('menu')} />
        ) : (
          <>
            <Navbar onOpenCart={() => setIsCartOpen(true)} />
            <main className="app-content">
              {activeTab === 'home' ? <HomeScreen /> :
               activeTab === 'profile' ? <Profile /> : 
               activeTab === 'history' ? <History /> : 
               activeTab === 'categories' ? (
                <div className="categories-page">
                  <div className="search-wrapper">
                    <div className="search-box">
                      <Search size={20} className="search-icon" />
                      <input 
                        className="main-search-input"
                        type="text" 
                        placeholder="¿Qué se te antoja hoy?" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} 
                      />
                    </div>
                  </div>
                  {selectedCategory ? (
                    <ProductList products={filteredProducts} categoryName={selectedCategory} onBack={() => setSelectedCategory(null)} />
                  ) : searchQuery !== '' ? (
                    <ProductList products={filteredProducts} categoryName={`Resultados: "${searchQuery}"`} onBack={() => setSearchQuery('')} />
                  ) : (
                    <CategoryGrid onSelectCategory={setSelectedCategory} />
                  )}
                </div>
               ) : null}
            </main>
            <BottomNav activeTab={activeTab} onNavigate={(tab) => {
               setActiveTab(tab); 
               setSearchQuery(''); 
               setSelectedCategory(null);
            }} />
          </>
        )}
      </div>
    </CartProvider>
  );
}

export default App;