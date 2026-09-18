import React from 'react';
import { PlusCircle } from 'lucide-react';

interface PlanningHeaderProps {
  onOpenModal: () => void;
}

export const PlanningHeader: React.FC<PlanningHeaderProps> = ({ onOpenModal }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Planificación Cloud</h2>
        <p className="text-sm text-slate-500 mt-1">Diseña, configura y gestiona propuestas de arquitectura AWS antes de su implementación.</p>
      </div>
      <button 
        onClick={onOpenModal}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-md shadow-blue-600/30 cursor-pointer"
      >
        <PlusCircle className="w-5 h-5" />
        <span>Nueva Propuesta</span>
      </button>
    </div>
  );
};