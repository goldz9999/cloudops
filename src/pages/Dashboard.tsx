import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Globe, 
  DollarSign, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Activity,
  CheckCircle2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend,
  Tooltip
} from 'recharts';

import { StatCard } from '../components/common/StatCard';
import { awsServicesData } from '../data/awsServices';
import { initialCostItems } from '../data/costs';
import { regionsData } from '../data/regions';
import { securityChecksData } from '../data/security';

interface DashboardProps {
  region: string;
}

const REGION_STATUS_LABEL: Record<string, string> = {
  Operational: 'Operacional',
  Warning: 'Advertencia',
  Maintenance: 'Mantenimiento',
};

export const Dashboard: React.FC<DashboardProps> = ({ region }) => {
  const currentRegion = regionsData.find(r => r.code === region);
  // Cálculos dinámicos basados en datos mock centralizados
  const totalServicesInUse = awsServicesData.filter(s => s.status === 'in-use').length;
  
  // Recursos totales y seguridad calculados desde los datos mock
  const totalResources = initialCostItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalChecks = securityChecksData.length;
  const okChecks = securityChecksData.filter(c => c.status === 'correct').length;
  const securityScore = totalChecks > 0 ? Math.round((okChecks / totalChecks) * 100) : 0;
  const warningChecks = securityChecksData.filter(c => c.status !== 'correct').length;

  // Calcular costo mensual y anual a partir de initialCostItems
  const monthlyCost = initialCostItems.reduce((acc, item) => acc + (item.quantity * item.hours * item.hourlyRate), 0);
  const annualCost = monthlyCost * 12;

  // Datos para el gráfico de costos por servicio
  const costChartDataRaw = initialCostItems.map(item => ({
    name: item.serviceName.split(' ')[0], // Nombre corto del servicio
    cost: Number((item.quantity * item.hours * item.hourlyRate).toFixed(2))
  }));
  const totalChartCost = costChartDataRaw.reduce((acc, item) => acc + item.cost, 0);
  const costChartData = costChartDataRaw.map(item => ({
    ...item,
    pct: totalChartCost > 0 ? Math.round((item.cost / totalChartCost) * 100) : 0
  }));

  const COLORS = [
    '#2563EB', // Azul
    '#16A34A', // Verde
    '#F59E0B', // Ámbar
    '#9333EA', // Púrpura
    '#EF4444', // Rojo
    '#06B6D4', // Cian
    '#EC4899', // Rosa
    '#84CC16', // Lima
  ];

  return (
    <div className="space-y-6">
      {/* Título de bienvenida */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Dashboard General</h2>
          <p className="text-sm text-slate-500 mt-1">Resumen ejecutivo de la infraestructura Cloud y propuesta AWS Foundations.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            to="/planning" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm shadow-blue-600/30"
          >
            <span>Nueva Planificación</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Tarjetas de Indicadores (StatCards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <StatCard 
          title="Servicios Utilizados" 
          value={`${totalServicesInUse} Activos`} 
          icon={Server} 
          colorTheme="blue"
          trend="Catálogo AWS optimizado"
        />
        <StatCard 
          title="Región Principal" 
                    value={region} 
          icon={Globe} 
          colorTheme="emerald"
          trend={currentRegion ? `${currentRegion.name} (${REGION_STATUS_LABEL[currentRegion.status]})` : 'Región personalizada'}
        />
        <StatCard 
          title="Costo Mensual Estimado" 
          value={`$${monthlyCost.toFixed(2)}`} 
          icon={DollarSign} 
          colorTheme="amber"
          trend="Estimado según recursos actuales"
        />
        <StatCard 
          title="Costo Anual Proyectado" 
          value={`$${annualCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} 
          icon={DollarSign} 
          colorTheme="blue"
          trend="Proyección a 12 meses"
        />
        <StatCard 
          title="Recursos Cloud Totales" 
          value={`${totalResources} Recursos`} 
          icon={Layers} 
          colorTheme="emerald"
          trend="EC2, RDS, S3, CloudFront"
        />
        <StatCard 
          title="Estado de Seguridad" 
          value={`${securityScore}% Óptimo`} 
          icon={ShieldCheck} 
          colorTheme="emerald"
          trend={`${warningChecks} advertencia(s) (IAM)`}
          trendUp={false}
        />
      </div>

      {/* Sección de Gráficos y Resumen Arquitectónico */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de distribución de costos */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs lg:col-span-2 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Distribución de Costos Mensuales</h3>
              <p className="text-xs text-slate-500">Desglose porcentual por servicio activo en AWS.</p>
            </div>
            <div className="p-2 rounded-xl bg-slate-100 text-slate-600">
              <Activity className="w-5 h-5" />
            </div>
          </div>

          <div className="h-80 w-full flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <Pie
                  data={costChartData}
                  cx="50%"
                  cy="45%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={5}
                  dataKey="cost"
                >
                  {costChartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(_value: any, _name: any, item: any) => [`${item.payload.pct}%`, item.payload.name]}
                  contentStyle={{ backgroundColor: '#0F172A', color: '#fff', borderRadius: '8px', border: 'none', fontSize: '12px', padding: '6px 10px' }}
                  itemStyle={{ color: '#fff' }}
                  wrapperStyle={{ zIndex: 20 }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-xs font-bold text-slate-800 mr-3" style={{ color: '#1E293B' }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resumen Rápido de Estado y Regiones */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Estado de Arquitectura</h3>
            <p className="text-xs text-slate-500 mb-4">Salud de componentes clave de red y seguridad.</p>

            <div className="space-y-3.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-semibold text-slate-700">Modelo Responsabilidad</span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Alineado
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-semibold text-slate-700">VPC & Enrutamiento</span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Configurado
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-semibold text-slate-700">Políticas IAM & MFA</span>
                <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                  ⚠️ 1 Revisión
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-semibold text-slate-700">Regiones Despliegue</span>
                <span className="text-xs font-bold text-blue-600">{regionsData.length} Regiones Activas</span>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link 
              to="/network" 
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center justify-between group"
            >
              <span>Ver diagrama de arquitectura de red</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};