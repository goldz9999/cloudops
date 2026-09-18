import React from 'react';
import type { AWSService } from '../../types/cloud';
import { ServiceCard } from '../common/ServiceCard';

interface ServiceGridProps {
  services: AWSService[];
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  if (services.length === 0) {
    return (
      <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-2">
        <p className="text-base font-bold text-slate-700">No se encontraron servicios</p>
        <p className="text-xs text-slate-500">Prueba cambiando los términos de búsqueda o el filtro de categoría.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};