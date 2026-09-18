import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  DollarSign, 
  Globe, 
  ShieldCheck, 
  Network, 
  Server,
  Cloud
} from 'lucide-react';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/planning', label: 'Planificación Cloud', icon: FileText },
  { path: '/costs', label: 'Costos y Economía', icon: DollarSign },
  { path: '/infrastructure', label: 'Infraestructura Global', icon: Globe },
  { path: '/security', label: 'Seguridad e IAM', icon: ShieldCheck },
  { path: '/network', label: 'Arquitectura de Red', icon: Network },
  { path: '/services', label: 'Servicios AWS', icon: Server },
];

export const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-0 left-0 bottom-0 z-50 w-64 bg-[#0F172A] text-slate-300 flex flex-col transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand / Logo */}
        <div className="h-16 flex items-center px-6 gap-3 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
            <Cloud className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-white text-lg tracking-wide">CloudOps</h1>
            <p className="text-xs text-slate-400">AWS Foundations Hub</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer info in sidebar */}
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          CloudOps Dashboard v1.0 • Academic Edition
        </div>
      </aside>
    </>
  );
};