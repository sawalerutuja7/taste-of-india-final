import './App.css';
import Hero from './Components/Hero';
import SidebarNavbar from './Components/SidebarNavbar';
import Menu from './pages/Orders';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderManagement from './pages/Orders';
import ManageDishes from './pages/ManageDishes.jsx';
import GroceryManagement from './pages/GroceryManagement.jsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar with transition */}
        <SidebarNavbar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex-1 flex flex-col relative">
          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6 bg-gray-100 overflow-auto mt-[60px] md:ml-[250px] transition-all duration-300">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/orders" element={<OrderManagement/>} />
              <Route path="/managedishes" element={<ManageDishes />} />
              <Route path="/GroceryManagement" element={<GroceryManagement />} />

            </Routes>
          </main>
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black opacity-50 md:hidden" 
            onClick={() => setIsSidebarOpen(false)}>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
