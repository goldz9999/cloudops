import React from 'react';
import { Plus, Edit3 } from 'lucide-react';
import type { AWSService } from '../../types/cloud';

interface CostFormProps {
  editingId: string | null;
  selectedServiceId: string;
  setSelectedServiceId: (val: string) => void;
  quantity: number;
  setQuantity: (val: number) => void;
  hours: number;
  setHours: (val: number) => void;
  hourlyRate: number;
  setHourlyRate: (val: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancelEdit: () => void;
  awsServices: AWSService[];
}

export const CostForm: React.FC<CostFormProps> = ({
  editingId,
  selectedServiceId,
  setSelectedServiceId,
  quantity,
  setQuantity,
  hours,
  setHours,
  hourlyRate,
  setHourlyRate,
  onSubmit,
  onCancelEdit,
  awsServices
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-bold text-slate-800">
          {editingId ? 'Editar Recurso' : 'Agregar Recurso'}
        </h3>
        {editingId && (
          <button 
            type="button"
            onClick={onCancelEdit}
            className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            Cancelar
          </button>
        )}
      </div>
      <p className="text-xs text-slate-500 mb-4">
        {editingId ? 'Modifica los parámetros del recurso.' : 'Simula un nuevo servicio en la calculadora.'}
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Servicio AWS</label>
          <select 
            value={selectedServiceId}
            onChange={(e) => setSelectedServiceId(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-white"
          >
            {awsServices.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Cantidad</label>
            <input 
              type="number" 
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Horas / Mes</label>
            <input 
              type="number" 
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              min={1}
              max={8760}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Precio por Hora ($)</label>
          <input 
            type="number" 
            step="0.0001"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <button 
          type="submit"
          className={`w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm cursor-pointer ${
            editingId 
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30' 
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30'
          }`}
        >
          {editingId ? <Edit3 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          <span>{editingId ? 'Actualizar Recurso' : 'Añadir a la Calculadora'}</span>
        </button>
      </form>
    </div>
  );
};