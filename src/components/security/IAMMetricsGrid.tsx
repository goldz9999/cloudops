import React from 'react';
import { Users, Key, UserCheck, FileText } from 'lucide-react';

export const IAMMetricsGrid: React.FC = () => {
  const iamMetrics = [
    { label: 'IAM Users', value: '12', description: 'Usuarios activos en la cuenta', icon: Users, color: 'text-blue-600 bg-blue-50' },
    { label: 'MFA Enabled', value: '11 / 12', description: 'Autenticación multifactor activa', icon: Key, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'IAM Roles', value: '8', description: 'Roles configurados para servicios', icon: UserCheck, color: 'text-purple-600 bg-purple-50' },
    { label: 'Active Policies', value: '15', description: 'Políticas de control de acceso', icon: FileText, color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {iamMetrics.map((metric, idx) => {
        const Icon = metric.icon;
        return (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{metric.label}</p>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{metric.value}</h3>
              <p className="text-xs text-slate-400 mt-1">{metric.description}</p>
            </div>
            <div className={`p-4 rounded-xl ${metric.color}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
};