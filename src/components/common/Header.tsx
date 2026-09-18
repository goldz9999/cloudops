import React from 'react';
import { Menu, Bell, Shield, User } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  selectedRegion?: string;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, selectedRegion = 'us-east-1' }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden focus:outline-none"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Región:</span>
          <span className="text-xs font-medium text-blue-600">{selectedRegion}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-200">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Seguridad: 92% Optimizada</span>
        </div>

        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative" aria-label="Notificaciones">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        <div className="h-6 w-px bg-slate-200 mx-1"></div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
            <User className="w-5 h-5" />
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-bold text-slate-800">Cloud Admin</p>
            <p className="text-[11px] text-slate-500">Arquitecto AWS</p>
          </div>
        </div>
      </div>
    </header>
  );
};