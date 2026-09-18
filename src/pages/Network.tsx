import React from 'react';
import { NetworkFlowDiagram } from '../components/network/NetworkFlowDiagram';
import { VPCCardDetails } from '../components/network/VPCCardDetails';

export const Network: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Arquitectura de Red y VPC</h2>
        <p className="text-sm text-slate-500 mt-1">Topología de red empresarial, enrutamiento Route 53, distribución CloudFront y aislamiento en VPC.</p>
      </div>

      <NetworkFlowDiagram />
      <VPCCardDetails />
    </div>
  );
};