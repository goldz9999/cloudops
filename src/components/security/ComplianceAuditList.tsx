import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const ComplianceAuditList: React.FC = () => {
  const complianceItems = [
    { title: 'Multi-Factor Authentication (MFA)', status: 'Correcto', type: 'success', detail: 'Habilitado para el usuario Root y administradores.' },
    { title: 'Password Policy', status: 'Correcto', type: 'success', detail: 'Longitud mínima de 14 caracteres con símbolos y rotación.' },
    { title: 'Encryption at Rest (KMS)', status: 'Correcto', type: 'success', detail: 'Bases de datos RDS y buckets S3 cifrados con llaves KMS.' },
    { title: 'Access Keys Rotation', status: 'Requiere revisión', type: 'warning', detail: '2 llaves de acceso superan los 90 días sin rotación.' },
    { title: 'VPC Security Groups', status: 'Correcto', type: 'success', detail: 'Sin puertos abiertos innecesarios hacia el exterior (0.0.0.0/0).' }
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
      <h3 className="text-lg font-bold text-slate-800 mb-1">Estado de Cumplimiento y Protección de Cuenta</h3>
      <p className="text-xs text-slate-500 mb-6">Auditoría automática de buenas prácticas de seguridad recomendadas por AWS Well-Architected.</p>

      <div className="space-y-3">
        {complianceItems.map((item, index) => {
          const isSuccess = item.type === 'success';
          return (
            <div key={index} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-500">{item.detail}</p>
              </div>

              <div className="self-start sm:self-center">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 ${
                  isSuccess 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {isSuccess ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />}
                  <span>{item.status}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};