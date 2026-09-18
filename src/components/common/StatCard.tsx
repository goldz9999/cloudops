import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  colorTheme?: 'blue' | 'emerald' | 'amber' | 'red';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  trendUp = true,
  colorTheme = 'blue'
}) => {
  const themes = {
    blue: 'bg-blue-50 text-blue-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    amber: 'bg-amber-50 text-amber-600',
    red: 'bg-red-50 text-red-600',
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between hover:shadow-md transition-shadow">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{value}</h3>
        {trend && (
          <p className={`text-xs mt-2 font-medium flex items-center gap-1 ${trendUp ? 'text-emerald-600' : 'text-slate-500'}`}>
            <span>{trend}</span>
          </p>
        )}
      </div>
      <div className={`p-4 rounded-xl ${themes[colorTheme]}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
};