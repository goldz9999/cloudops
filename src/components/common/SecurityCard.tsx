import React from 'react';
import type { SecurityCheckItem } from '../../types/cloud';
import { StatusBadge } from './StatusBadge';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

interface SecurityCardProps {
  item: SecurityCheckItem;
}

export const SecurityCard: React.FC<SecurityCardProps> = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            {item.status === 'correct' ? (
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            ) : (
              <ShieldAlert className="w-5 h-5 text-amber-600" />
            )}
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.category}</span>
          </div>
          <StatusBadge status={item.status} />
        </div>

        <h4 className="font-bold text-slate-800 text-base mb-1">{item.metric}</h4>
        <p className="text-lg font-bold text-blue-600 mb-2">{item.value}</p>
        <p className="text-xs text-slate-600">{item.description}</p>
      </div>
    </div>
  );
};