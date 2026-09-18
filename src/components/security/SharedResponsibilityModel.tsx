import React from 'react';
import { ShieldCheck, Server, Lock } from 'lucide-react';

export const SharedResponsibilityModel: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">Modelo de Responsabilidad Compartida de AWS</h3>
          <p className="text-xs text-slate-500">La seguridad se divide entre la infraestructura global de AWS y la configuración del cliente.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AWS Responsibility */}
        <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50/40 space-y-4">
          <div className="flex items-center gap-2.5 text-blue-900 font-bold text-base">
            <Server className="w-5 h-5 text-blue-600" />
            <span>AWS es responsable de: (Seguridad DE la Nube)</span>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span><strong>Infraestructura global:</strong> Regiones, zonas de disponibilidad y puntos de presencia Edge.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span><strong>Hardware e instalaciones:</strong> Seguridad física de los centros de datos y servidores.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span><strong>Software de virtualización:</strong> Gestión del hipervisor y parches de infraestructura base.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span><strong>Redes físicas:</strong> Seguridad en la capa de transmisión de datos inter-centros.</span>
            </li>
          </ul>
        </div>

        {/* Customer Responsibility */}
        <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-4">
          <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-base">
            <Lock className="w-5 h-5 text-emerald-600" />
            <span>El Cliente es responsable de: (Seguridad EN la Nube)</span>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span><strong>Datos del cliente:</strong> Cifrado en reposo, en tránsito y clasificación de la información.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span><strong>Identidades y Accesos (IAM):</strong> Gestión de usuarios, roles, contraseñas y políticas de mínimo privilegio.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span><strong>Configuración de red:</strong> Listas de control de acceso (NACLs) y grupos de seguridad (Security Groups).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span><strong>Sistemas operativos y aplicaciones:</strong> Parches de seguridad del SO en EC2 y configuraciones de servicios.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};