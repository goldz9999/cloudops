import React from 'react';
import { DollarSign, Calculator, Activity, ArrowUpRight } from 'lucide-react';

interface CostSummaryCardsProps {
  totalMonthly: number;
  totalAnnual: number;
}

export const CostSummaryCards: React.FC<CostSummaryCardsProps> = ({ totalMonthly, totalAnnual }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Costo Mensual Estimado</p>
          <h3 className="text-2xl font-bold text-amber-600 tracking-tight">${totalMonthly.toFixed(2)}</h3>
          <p className="text-xs text-slate-500 mt-1">Basado en 730 hrs/mes promedio</p>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 text-amber-600">
          <DollarSign className="w-6 h-6" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Costo Anual Proyectado</p>
          <h3 className="text-2xl font-bold text-blue-600 tracking-tight">${totalAnnual.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
          <p className="text-xs text-slate-500 mt-1">Proyección lineal a 12 meses</p>
        </div>
        <div className="p-4 rounded-xl bg-blue-50 text-blue-600">
          <Calculator className="w-6 h-6" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Optimización Cloud</p>
          <h3 className="text-2xl font-bold text-emerald-600 tracking-tight">18.5%</h3>
          <p className="text-xs text-emerald-700 mt-1 flex items-center gap-1 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" /> Ahorro con Reserved Instances
          </p>
        </div>
        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-600">
          <Activity className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};