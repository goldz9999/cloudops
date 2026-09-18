import React from 'react';
import { X, Server, Globe, Users, Shield, Layers } from 'lucide-react';
import type { CloudPlan } from '../../types/cloud';

interface PlanningDetailModalProps {
  plan: CloudPlan | null;
  onClose: () => void;
}

export const PlanningDetailModal: React.FC<PlanningDetailModalProps> = ({ plan, onClose }) => {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
            <Server className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{plan.appType}</span>
            <h3 className="text-xl font-bold text-slate-800">{plan.solutionName}</h3>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Descripción:</span>
            <p className="text-slate-700 mt-1">{plan.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-500">Región AWS:</span>
              <p className="font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Globe className="w-4 h-4 text-blue-600" /> {plan.region}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Usuarios Estimados:</span>
              <p className="font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Users className="w-4 h-4 text-emerald-600" /> {plan.estimatedUsers.toLocaleString()}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Disponibilidad:</span>
              <p className="font-bold text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Shield className="w-4 h-4 text-purple-600" /> {plan.availability}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500">Fecha de Creación:</span>
              <p className="font-bold text-slate-800 mt-0.5">{plan.createdAt}</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Servicios AWS Integrados:</span>
            <div className="flex flex-wrap gap-2">
              {plan.selectedServices.map(sId => (
                <span key={sId} className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-semibold uppercase">
                  {sId}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Objetivo de Migración:</span>
            <p className="text-slate-700 font-medium mt-0.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-600" /> {plan.migrationGoal}
            </p>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Cerrar Detalle
          </button>
        </div>
      </div>
    </div>
  );
};