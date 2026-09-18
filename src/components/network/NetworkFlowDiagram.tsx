import React from 'react';
import { Globe, Shield, Server, Database, ArrowRight, Network as NetworkIcon } from 'lucide-react';

export const NetworkFlowDiagram: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800">Flujo de Tráfico y Enrutamiento Global</h3>
        <p className="text-xs text-slate-500 mt-1">
          Arquitectura escalable horizontal desde las solicitudes de los usuarios en Internet hasta el almacenamiento seguro dentro de la VPC.
        </p>
      </div>

      {/* Contenedor del Diagrama en Horizontal con Scroll Horizontal si es necesario */}
      <div className="overflow-x-auto pb-4 thin-scroll">
        <div className="flex items-center justify-between min-w-[950px] gap-3 py-4">
          
          {/* Nodo 1: Usuarios / Internet */}
          <div className="flex-1 bg-slate-900 text-white p-4 rounded-2xl shadow-md flex flex-col justify-between min-h-[130px]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-slate-800 text-blue-400">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">Client</span>
            </div>
            <div>
              <h4 className="font-bold text-xs">Usuarios / Internet</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">Tráfico HTTP/HTTPS global</p>
            </div>
          </div>

          <div className="shrink-0 text-blue-500">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>

          {/* Nodo 2: Route 53 */}
          <div className="flex-1 bg-white border-2 border-blue-500 p-4 rounded-2xl shadow-sm flex flex-col justify-between min-h-[130px]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <NetworkIcon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold">DNS</span>
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-800">Amazon Route 53</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Enrutamiento de baja latencia</p>
            </div>
          </div>

          <div className="shrink-0 text-blue-500">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>

          {/* Nodo 3: CloudFront */}
          <div className="flex-1 bg-white border-2 border-amber-400 p-4 rounded-2xl shadow-sm flex flex-col justify-between min-h-[130px]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-semibold">CDN</span>
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-800">CloudFront</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Caché en Edge & AWS Shield</p>
            </div>
          </div>

          <div className="shrink-0 text-blue-500">
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>

          {/* Contenedor VPC (Virtual Private Cloud) con subredes internas */}
          <div className="flex-[2.2] bg-slate-50 border-2 border-dashed border-blue-300 p-4 rounded-3xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <h4 className="font-bold text-slate-800 text-xs">AWS VPC (10.0.0.0/16)</h4>
              </div>
              <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">
                Isolated
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Subred Pública */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue-700 uppercase">Public Subnet</span>
                  <Server className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <p className="font-bold text-slate-800 text-[11px]">Amazon EC2</p>
                <p className="text-[9px] text-slate-500">IP: 54.210.12.8</p>
              </div>

              {/* Subred Privada */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase">Private Subnet</span>
                  <Database className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="font-bold text-slate-800 text-[11px]">Amazon RDS</p>
                <p className="text-[9px] text-slate-500">Port 5432 (Internal)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};