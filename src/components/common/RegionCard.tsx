import React, { useState } from 'react';
import type { AWSRegion } from '../../types/cloud';
import { StatusBadge } from './StatusBadge';
import { Globe, MapPin, Server, X } from 'lucide-react';
import { awsServicesData } from '../../data/awsServices';

interface RegionCardProps {
  region: AWSRegion;
}

export const RegionCard: React.FC<RegionCardProps> = ({ region }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulamos o filtramos algunos servicios activos según la cantidad (deployedServices)
  const activeServicesList = awsServicesData.slice(0, region.deployedServices);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
      >
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-base">{region.name}</h4>
                <p className="text-xs font-mono text-blue-600 font-semibold">{region.code}</p>
              </div>
            </div>
            <StatusBadge status={region.status.toLowerCase() as any} label={region.status} />
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 text-sm">
            <div className="flex items-center justify-between text-slate-600">
              <span className="flex items-center gap-1.5 text-xs">
                <MapPin className="w-4 h-4 text-slate-400" /> Ubicación:
              </span>
              <span className="font-medium text-slate-800 text-xs">{region.location}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span className="flex items-center gap-1.5 text-xs">
                <Server className="w-4 h-4 text-slate-400" /> Servicios Activos:
              </span>
              <span className="font-semibold text-blue-600 text-xs hover:underline">{region.deployedServices} servicios</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>Haz clic para ver servicios</span>
          <span>Ver detalle →</span>
        </div>
      </div>

      {/* MODAL DE SERVICIOS DE LA REGIÓN */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{region.code}</span>
                <h3 className="text-xl font-bold text-slate-800">{region.name}</h3>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Ubicación Física:</span>
                  <span className="font-bold text-slate-700">{region.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Estado:</span>
                  <span className="font-bold text-emerald-600">{region.status}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Servicios Desplegados ({activeServicesList.length}):
                </h4>
                <div className="space-y-2">
                  {activeServicesList.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div>
                        <p className="font-bold text-slate-800 text-xs">{service.name}</p>
                        <p className="text-[10px] text-slate-500">{service.category}</p>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Operativo
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};