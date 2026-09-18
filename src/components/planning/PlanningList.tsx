import React from 'react';
import { Globe, Users, Shield, Trash2, Eye } from 'lucide-react';
import type { CloudPlan } from '../../types/cloud';

interface PlanningListProps {
  plans: CloudPlan[];
  onSelectPlan: (plan: CloudPlan) => void;
  onDeletePlan: (e: React.MouseEvent, id: string) => void;
}

export const PlanningList: React.FC<PlanningListProps> = ({ plans, onSelectPlan, onDeletePlan }) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
      <h3 className="text-lg font-bold text-slate-800 mb-1">Propuestas Registradas</h3>
      <p className="text-xs text-slate-500 mb-6">Haz clic sobre cualquier tarjeta para visualizar el detalle completo de los parámetros configurados.</p>

      {plans.length === 0 ? (
        <p className="text-sm text-slate-500 italic py-6 text-center">No hay propuestas registradas actualmente.</p>
      ) : (
        <div className="space-y-4">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              onClick={() => onSelectPlan(plan)}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-slate-800 text-base group-hover:text-blue-600 transition-colors">{plan.solutionName}</h4>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    {plan.appType}
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-1">{plan.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1 font-medium">
                    <Globe className="w-3.5 h-3.5 text-blue-600" /> {plan.region}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Users className="w-3.5 h-3.5 text-emerald-600" /> {plan.estimatedUsers.toLocaleString()} usuarios
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Shield className="w-3.5 h-3.5 text-purple-600" /> {plan.availability}
                  </span>
                  <span className="text-slate-400">| Creado: {plan.createdAt}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {plan.selectedServices.map(sId => (
                    <span key={sId} className="px-2 py-0.5 rounded-md bg-slate-200/70 text-slate-700 font-mono text-[11px] uppercase">
                      {sId}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 self-end md:self-center">
                <button 
                  onClick={(e) => { e.stopPropagation(); onSelectPlan(plan); }}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                  title="Ver detalles"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button 
                  onClick={(e) => onDeletePlan(e, plan.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                  title="Eliminar propuesta"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};