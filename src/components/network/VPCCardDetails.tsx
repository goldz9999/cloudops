import React from 'react';
import { Layers, CheckCircle2, Cpu, HardDrive } from 'lucide-react';

export const VPCCardDetails: React.FC = () => {
  const vpcComponents = [
    { name: 'Internet Gateway (IGW)', type: 'Gateway', desc: 'Permite la comunicación entre instancias en la VPC e Internet.', status: 'Activo' },
    { name: 'NAT Gateway', type: 'Networking', desc: 'Permite a las instancias en subredes privadas iniciar conexiones salientes.', status: 'Activo' },
    { name: 'Route Tables', type: 'Routing', desc: 'Tablas de rutas configuradas para dirigir el tráfico de subredes.', status: 'Configurado' },
    { name: 'Security Groups / NACLs', type: 'Firewall', desc: 'Reglas de filtrado de paquetes a nivel de instancia y de subred.', status: 'Protegido' },
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
          <Layers className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">Componentes de Red y Conectividad VPC</h3>
          <p className="text-xs text-slate-500">Elementos estructurales que garantizan el aislamiento y conectividad segura.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vpcComponents.map((comp, index) => (
          <div key={index} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-800 text-sm">{comp.name}</h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-100 text-purple-700">
                  {comp.type}
                </span>
              </div>
              <p className="text-xs text-slate-500">{comp.desc}</p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold inline-flex items-center gap-1 shrink-0">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {comp.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};