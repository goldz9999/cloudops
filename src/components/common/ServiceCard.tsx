import React from 'react';
import type { AWSService } from '../../types/cloud';
import { StatusBadge } from './StatusBadge';
import { Server } from 'lucide-react';

interface ServiceCardProps {
  service: AWSService;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-base">{service.name}</h4>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{service.category}</span>
            </div>
          </div>
          <StatusBadge status={service.status} />
        </div>
        
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{service.description}</p>
      </div>

      <div className="pt-3 border-t border-slate-100 bg-slate-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
        <p className="text-xs font-semibold text-slate-500 uppercase">Función principal:</p>
        <p className="text-xs text-slate-700 font-medium mt-0.5">{service.purpose}</p>
      </div>
    </div>
  );
};