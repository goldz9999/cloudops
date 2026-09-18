import React from 'react';
import { Globe, ShieldCheck, Server, RefreshCw } from 'lucide-react';
import { regionsData } from '../data/regions';
import { RegionGrid } from '../components/infrastructure/RegionGrid';

export const Infrastructure: React.FC = () => {
  const totalRegions = regionsData.length;
  const totalAzs = regionsData.reduce((sum, r) => sum + r.azs.length, 0);
  const totalServices = regionsData.reduce((sum, r) => sum + r.deployedServices, 0);
  const operationalRegions = regionsData.filter(r => r.status === 'Operational').length;

  return (
    <div className="space-y-8 pb-12">
      {/* Título de la página */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Infraestructura Global AWS</h2>
          <p className="text-sm text-slate-500 mt-1">Visualización de regiones, zonas de disponibilidad y nodos globales de despliegue.</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Red Global Operativa ({operationalRegions}/{totalRegions} Regiones)</span>
        </div>
      </div>

      {/* Tarjetas de Resumen de Infraestructura */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Regiones Activas</p>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{totalRegions} Regiones</h3>
            <p className="text-xs text-slate-500 mt-1">N. America, Europe, Asia Pacific</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-50 text-blue-600">
            <Globe className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Zonas de Disponibilidad (AZs)</p>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{totalAzs} AZs Disponibles</h3>
            <p className="text-xs text-slate-500 mt-1">Alta tolerancia a fallos multi-AZ</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Servicios Desplegados</p>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{totalServices} Servicios Activos</h3>
            <p className="text-xs text-slate-500 mt-1">Distribuidos en {totalRegions} regiones</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 text-amber-600">
            <Server className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Grid de Regiones */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-800">Regiones AWS Configuradas</h3>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <RefreshCw className="w-3.5 h-3.5" /> Sincronizado en tiempo real
          </span>
        </div>

        <RegionGrid regions={regionsData} />
      </div>
    </div>
  );
};