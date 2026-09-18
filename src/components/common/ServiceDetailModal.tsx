import React from 'react';
import type { AWSService } from '../../types/cloud';
import { StatusBadge } from './StatusBadge';
import { Server, X, DollarSign, Gift, XCircle } from 'lucide-react';

interface ServiceDetailModalProps {
  service: AWSService | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-md max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg leading-tight">{service.name}</h3>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{service.category}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <StatusBadge status={service.status} />
          </div>

          <p className="text-sm text-slate-600 mb-4">{service.description}</p>

          <div className="mb-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Para qué se usa</p>
            <p className="text-sm text-slate-700">{service.purpose}</p>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 mb-3">
            <div className="flex items-center gap-1.5 mb-1">
              <DollarSign className="w-3.5 h-3.5 text-amber-700" />
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Costo aproximado</p>
            </div>
            <p className="text-sm text-slate-700">{service.pricing}</p>
          </div>

          <div className={`p-3 rounded-xl border ${service.hasFreeTier ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center gap-1.5 mb-1">
              {service.hasFreeTier ? (
                <Gift className="w-3.5 h-3.5 text-emerald-700" />
              ) : (
                <XCircle className="w-3.5 h-3.5 text-slate-500" />
              )}
              <p className={`text-xs font-bold uppercase tracking-wider ${service.hasFreeTier ? 'text-emerald-800' : 'text-slate-600'}`}>
                {service.hasFreeTier ? 'Tiene capa gratuita' : 'Sin capa gratuita'}
              </p>
            </div>
            <p className="text-sm text-slate-700">{service.freeTierDetail}</p>
          </div>

          <p className="text-[11px] text-slate-400 mt-4 italic">
            Precios de referencia en USD, región us-east-1. Pueden variar según región y cambios de AWS.
          </p>
        </div>
      </div>
    </div>
  );
};