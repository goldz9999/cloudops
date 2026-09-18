import React from 'react';
import { X, BarChart2 } from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import type { CloudCostItem } from '../../types/cloud';

interface CostDetailModalProps {
  item: CloudCostItem;
  onClose: () => void;
}

export const CostDetailModal: React.FC<CostDetailModalProps> = ({ item, onClose }) => {
  const baseMonthly = item.quantity * item.hours * item.hourlyRate;
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  const monthlyData = months.map((month, index) => {
    const variance = 1 + (Math.sin(index) * 0.05);
    return {
      month,
      cost: Number((baseMonthly * variance).toFixed(2))
    };
  });

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Desglose de Costos Anual</span>
            <h3 className="text-xl font-bold text-slate-800">{item.serviceName}</h3>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
            <div>
              <span className="text-xs font-semibold text-slate-500">Cantidad:</span>
              <p className="font-bold text-slate-800 text-base">{item.quantity} un.</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Costo Mensual Base:</span>
              <p className="font-bold text-amber-600 text-base">${baseMonthly.toFixed(2)}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Total Proyectado Anual:</span>
              <p className="font-bold text-blue-600 text-base">${(baseMonthly * 12).toFixed(2)}</p>
            </div>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="month" stroke="#64748B" fontSize={11} />
                <YAxis stroke="#64748B" fontSize={11} />
                <Tooltip 
                  formatter={(val: any) => [`$${val}`, 'Gasto Mensual']}
                  contentStyle={{ backgroundColor: '#0F172A', color: '#fff', borderRadius: '12px', border: 'none' }}
                />
                <Bar dataKey="cost" fill="#16A34A" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-center text-xs">
            {monthlyData.map((m, idx) => (
              <div key={idx} className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-500 block">{m.month}</span>
                <span className="font-semibold text-slate-800 mt-0.5 block">${m.cost}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Cerrar Desglose
          </button>
        </div>
      </div>
    </div>
  );
};