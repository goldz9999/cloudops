import React, { useState } from 'react';
import type { CloudCostItem } from '../types/cloud';
import { initialCostItems } from '../data/costs';
import { awsServicesData } from '../data/awsServices';
import { regionsData } from '../data/regions';
import { CostSummaryCards } from '../components/costs/CostSummaryCards';
import { CostChart } from '../components/costs/CostChart';
import { CostForm } from '../components/costs/CostForm';
import { CostTable } from '../components/costs/CostTable';
import { CostDetailModal } from '../components/costs/CostDetailModal';

export const Costs: React.FC = () => {
  const [costItems, setCostItems] = useState<CloudCostItem[]>(initialCostItems);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState('ec2');
  const [quantity, setQuantity] = useState<number>(1);
  const [hours, setHours] = useState<number>(730);
  const [hourlyRate, setHourlyRate] = useState<number>(0.05);
    const [region, setRegion] = useState('us-east-1');

  const [selectedItemDetail, setSelectedItemDetail] = useState<CloudCostItem | null>(null);

  const totalMonthly = costItems.reduce((acc, item) => acc + (item.quantity * item.hours * item.hourlyRate), 0);
  const totalAnnual = totalMonthly * 12;

  const handleSaveCostItem = (e: React.FormEvent) => {
    e.preventDefault();
    const service = awsServicesData.find(s => s.id === selectedServiceId);
    const serviceName = service ? service.name : 'Servicio AWS';

    if (editingId) {
      setCostItems(costItems.map(item => {
        if (item.id === editingId) {
          return {
            ...item,
            serviceId: selectedServiceId,
            serviceName: `${serviceName} (${quantity} un.)`,
            quantity: Number(quantity),
            hours: Number(hours),
            hourlyRate: Number(hourlyRate),
            region
          };
        }
        return item;
      }));
      setEditingId(null);
    } else {
      const newItem: CloudCostItem = {
        id: `cost-${Date.now()}`,
        serviceId: selectedServiceId,
        serviceName: `${serviceName} (${quantity} un.)`,
        quantity: Number(quantity),
        hours: Number(hours),
        hourlyRate: Number(hourlyRate),
        region
      };
      setCostItems([...costItems, newItem]);
    }

    setQuantity(1);
    setHours(730);
    setHourlyRate(0.05);
  };

  const handleEditClick = (item: CloudCostItem) => {
    setEditingId(item.id);
    setSelectedServiceId(item.serviceId);
    setQuantity(item.quantity);
    setHours(item.hours);
    setHourlyRate(item.hourlyRate);
    setRegion(item.region || 'us-east-1');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setQuantity(1);
    setHours(730);
    setHourlyRate(0.05);
  };

  const handleDeleteItem = (id: string) => {
    setCostItems(costItems.filter(item => item.id !== id));
    if (editingId === id) handleCancelEdit();
  };

  const chartData = costItems.map(item => ({
    name: item.serviceName.split(' ')[0],
    mensual: Number((item.quantity * item.hours * item.hourlyRate).toFixed(2))
  }));

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Costos y Economía Cloud</h2>
        <p className="text-sm text-slate-500 mt-1">Calculadora interactiva, proyecciones y desglose mensual de la infraestructura AWS.</p>
      </div>

      <CostSummaryCards totalMonthly={totalMonthly} totalAnnual={totalAnnual} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CostChart data={chartData} />
        <CostForm 
          editingId={editingId}
          selectedServiceId={selectedServiceId}
          setSelectedServiceId={setSelectedServiceId}
          quantity={quantity}
          setQuantity={setQuantity}
          hours={hours}
          setHours={setHours}
          hourlyRate={hourlyRate}
          setHourlyRate={setHourlyRate}
          onSubmit={handleSaveCostItem}
          onCancelEdit={handleCancelEdit}
        awsServices={awsServicesData}
          region={region}
          setRegion={setRegion}
          regions={regionsData}
        />
      </div>

      <CostTable 
        items={costItems}
        onSelectItem={setSelectedItemDetail}
        onEditItem={handleEditClick}
        onDeleteItem={handleDeleteItem}
      />

      {selectedItemDetail && (
        <CostDetailModal item={selectedItemDetail} onClose={() => setSelectedItemDetail(null)} />
      )}
    </div>
  );
};