import React, { useState } from 'react';
import { awsServicesData } from '../data/awsServices';
import { ServiceSearchFilter } from '../components/services/ServiceSearchFilter';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { ServiceDetailModal } from '../components/common/ServiceDetailModal';
import type { AWSService } from '../types/cloud';

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedService, setSelectedService] = useState<AWSService | null>(null);

  // Obtener categorías únicas de los datos
  const categories = ['Todas', ...Array.from(new Set(awsServicesData.map(s => s.category)))];

  // Filtrar servicios dinámicamente
  const filteredServices = awsServicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Catálogo de Servicios AWS</h2>
        <p className="text-sm text-slate-500 mt-1">Explora los servicios de computación, almacenamiento, bases de datos y seguridad integrados en CloudOps.</p>
      </div>

      <ServiceSearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      <ServiceGrid services={filteredServices} onServiceClick={setSelectedService} />

      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
};