import React from 'react';
import { IAMMetricsGrid } from '../components/security/IAMMetricsGrid';
import { SharedResponsibilityModel } from '../components/security/SharedResponsibilityModel';
import { ComplianceAuditList } from '../components/security/ComplianceAuditList';

export const Security: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Seguridad e IAM</h2>
        <p className="text-sm text-slate-500 mt-1">Gestión de identidades, cumplimiento normativo y modelo de responsabilidad compartida en AWS.</p>
      </div>

      <IAMMetricsGrid />
      <SharedResponsibilityModel />
      <ComplianceAuditList />
    </div>
  );
};