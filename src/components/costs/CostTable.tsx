import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';
import type { CloudCostItem } from '../../types/cloud';

interface CostTableProps {
  items: CloudCostItem[];
  onSelectItem: (item: CloudCostItem) => void;
  onEditItem: (item: CloudCostItem) => void;
  onDeleteItem: (id: string) => void;
}

export const CostTable: React.FC<CostTableProps> = ({ items, onSelectItem, onEditItem, onDeleteItem }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-bold text-slate-800">Detalle de Recursos y Costos</h3>
        <span className="text-xs text-blue-600 font-medium">💡 Haz clic en cualquier fila para ver el desglose mensual</span>
      </div>
      <p className="text-xs text-slate-500 mb-6">Desglose completo de tarifas, consumo mensual y proyección anual.</p>

      <div className="overflow-x-auto thin-scroll">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-400 text-xs uppercase font-bold tracking-wider">
              <th className="py-3 px-4">Servicio / Recurso</th>
              <th className="py-3 px-4 text-center">Cantidad</th>
              <th className="py-3 px-4 text-center">Horas Estimadas</th>
              <th className="py-3 px-4 text-right">Precio/Hora</th>
              <th className="py-3 px-4 text-right">Costo Mensual</th>
              <th className="py-3 px-4 text-right">Costo Anual</th>
              <th className="py-3 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {items.map(item => {
              const monthly = item.quantity * item.hours * item.hourlyRate;
              const annual = monthly * 12;
              return (
                <tr 
                  key={item.id} 
                  onClick={() => onSelectItem(item)}
                  className="hover:bg-blue-50/50 transition-colors cursor-pointer group"
                  title="Haz clic para ver desglose mensual"
                >
                  <td className="py-3.5 px-4 font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {item.serviceName}
                  </td>
                  <td className="py-3.5 px-4 text-center font-medium">{item.quantity}</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">{item.hours} hrs</td>
                  <td className="py-3.5 px-4 text-right font-mono text-xs">${item.hourlyRate.toFixed(4)}</td>
                  <td className="py-3.5 px-4 text-right font-bold text-amber-600">${monthly.toFixed(2)}</td>
                  <td className="py-3.5 px-4 text-right font-bold text-blue-600">${annual.toFixed(2)}</td>
                  <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1">
                      <button 
                        onClick={() => onEditItem(item)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        title="Editar recurso"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => onDeleteItem(item.id)}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Eliminar recurso"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};