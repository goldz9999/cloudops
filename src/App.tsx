import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/common/Sidebar';
import { Header } from './components/common/Header';
import { Dashboard } from './pages/Dashboard';
import { Planning } from './pages/Planning';
import { Costs } from './pages/Costs';
import { Infrastructure } from './pages/Infrastructure'; // <-- Asegúrate de tener esta importación
import { Security } from './pages/Security';
import { Network } from './pages/Network';
import { Services } from './pages/Services';

// Placeholder temporal para los módulos restantes
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
    <h2 className="text-2xl font-bold text-slate-800 mb-2">{title}</h2>
    <p className="text-slate-600">Este módulo está listo para ser desarrollado en la siguiente fase.</p>
  </div>
);

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row text-[#1E293B]">
        {/* Sidebar de navegación */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Contenido principal */}
        <div className="flex-1 flex flex-col lg:pl-64">
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} selectedRegion="us-east-1" />
          
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/costs" element={<Costs />} />
              <Route path="/infrastructure" element={<Infrastructure />} /> 
              <Route path="/security" element={<Security />} /> 
              <Route path="/network" element={<Network />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}


export default App;