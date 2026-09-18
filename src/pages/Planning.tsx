import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { CloudPlan } from '../types/cloud';
import { awsServicesData } from '../data/awsServices';
import { regionsData } from '../data/regions';

import { PlanningHeader } from '../components/planning/PlanningHeader';
import { PlanningList } from '../components/planning/PlanningList';
import { PlanningFormModal } from '../components/planning/PlanningFormModal';
import { PlanningDetailModal } from '../components/planning/PlanningDetailModal';

export const Planning: React.FC = () => {
  const [solutionName, setSolutionName] = useState('');
  const [appType, setAppType] = useState('E-commerce');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState('us-east-1');
  const [estimatedUsers, setEstimatedUsers] = useState<number>(10000);
  const [availability, setAvailability] = useState('99.9% (Alta Disponibilidad)');
  const [selectedServices, setSelectedServices] = useState<string[]>(['ec2', 's3', 'rds', 'vpc', 'iam']);
  const [migrationGoal, setMigrationGoal] = useState('Escalabilidad y Reducción de Costos');

  const [plans, setPlans] = useState<CloudPlan[]>([
    {
      id: 'plan-1',
      solutionName: 'Plataforma E-Commerce Global',
      appType: 'E-commerce',
      description: 'Arquitectura web multi-región para tienda online de alta concurrencia.',
      region: 'us-east-1',
      estimatedUsers: 50000,
      availability: '99.99%',
      selectedServices: ['ec2', 's3', 'rds', 'cloudfront', 'route53', 'vpc', 'iam'],
      migrationGoal: 'Escalabilidad y Rendimiento Global',
      createdAt: new Date().toLocaleDateString()
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanDetail, setSelectedPlanDetail] = useState<CloudPlan | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!solutionName.trim() || !description.trim()) {
      setErrorMessage('Por favor completa el nombre de la solución y la descripción.');
      return;
    }

    if (selectedServices.length === 0) {
      setErrorMessage('Debes seleccionar al menos un servicio AWS.');
      return;
    }

    setErrorMessage(null);

    const newPlan: CloudPlan = {
      id: `plan-${Date.now()}`,
      solutionName,
      appType,
      description,
      region,
      estimatedUsers: Number(estimatedUsers),
      availability,
      selectedServices,
      migrationGoal,
      createdAt: new Date().toLocaleDateString()
    };

    setPlans([newPlan, ...plans]);
    setSuccessMessage('✓ Propuesta Cloud registrada correctamente.');
    setIsModalOpen(false);

    setSolutionName('');
    setDescription('');

    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
  };

  const handleDeletePlan = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setPlans(plans.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-8 pb-12">
      <PlanningHeader onOpenModal={() => setIsModalOpen(true)} />

      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span className="text-sm font-medium">{successMessage}</span>
        </div>
      )}

      <PlanningList 
        plans={plans}
        onSelectPlan={setSelectedPlanDetail}
        onDeletePlan={handleDeletePlan}
      />

      <PlanningFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        solutionName={solutionName}
        setSolutionName={setSolutionName}
        appType={appType}
        setAppType={setAppType}
        description={description}
        setDescription={setDescription}
        region={region}
        setRegion={setRegion}
        estimatedUsers={estimatedUsers}
        setEstimatedUsers={setEstimatedUsers}
        availability={availability}
        setAvailability={setAvailability}
        selectedServices={selectedServices}
        onServiceToggle={handleServiceToggle}
        migrationGoal={migrationGoal}
        setMigrationGoal={setMigrationGoal}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        awsServices={awsServicesData}
        regions={regionsData}
      />

      <PlanningDetailModal 
        plan={selectedPlanDetail}
        onClose={() => setSelectedPlanDetail(null)}
      />
    </div>
  );
};