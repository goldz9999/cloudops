import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: 'correct' | 'warning' | 'error' | 'operational' | 'maintenance' | 'in-use' | 'available' | 'not-used';
  label?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const getBadgeConfig = () => {
    switch (status) {
      case 'correct':
      case 'operational':
      case 'in-use':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: CheckCircle2,
          defaultLabel: status === 'in-use' ? 'En uso' : status === 'operational' ? 'Operacional' : 'Correcto'
        };
      case 'warning':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: AlertTriangle,
          defaultLabel: 'Requiere revisión'
        };
      case 'error':
        return {
          bg: 'bg-red-50 text-red-700 border-red-200',
          icon: XCircle,
          defaultLabel: 'Problema crítico'
        };
      case 'maintenance':
        return {
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: Clock,
          defaultLabel: 'Mantenimiento'
        };
      case 'available':
        return {
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          icon: CheckCircle2,
          defaultLabel: 'Disponible'
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-600 border-slate-200',
          icon: CheckCircle2,
          defaultLabel: 'Inactivo'
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;
  const text = label || config.defaultLabel;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.bg}`}>
      <Icon className="w-3.5 h-3.5" />
      <span>{text}</span>
    </span>
  );
};