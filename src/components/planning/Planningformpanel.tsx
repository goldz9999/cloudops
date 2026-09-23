import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import type { AWSService, AWSRegion } from '../../types/cloud';

interface PlanningFormPanelProps {
    solutionName: string;
    setSolutionName: (val: string) => void;
    appType: string;
    setAppType: (val: string) => void;
    description: string;
    setDescription: (val: string) => void;
    region: string;
    setRegion: (val: string) => void;
    estimatedUsers: number;
    setEstimatedUsers: (val: number) => void;
    availability: string;
    setAvailability: (val: string) => void;
    selectedServices: string[];
    onServiceToggle: (id: string) => void;
    migrationGoal: string;
    setMigrationGoal: (val: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    errorMessage: string | null;
    awsServices: AWSService[];
    regions: AWSRegion[];
}

export const PlanningFormPanel: React.FC<PlanningFormPanelProps> = ({
    solutionName,
    setSolutionName,
    appType,
    setAppType,
    description,
    setDescription,
    region,
    setRegion,
    estimatedUsers,
    setEstimatedUsers,
    availability,
    setAvailability,
    selectedServices,
    onServiceToggle,
    migrationGoal,
    setMigrationGoal,
    onSubmit,
    errorMessage,
    awsServices,
    regions
}) => {
    return (
        <div className="bg-white rounded-2xl w-full p-5 sm:p-6 shadow-sm border border-slate-100 sticky top-6">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <FileText className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-800">Nueva Propuesta de Arquitectura</h3>
                    <p className="text-xs text-slate-500">Configura los parámetros clave de tu infraestructura AWS.</p>
                </div>
            </div>

            {errorMessage && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-800 p-3 rounded-xl flex items-center gap-2 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Nombre de la Solución *</label>
                        <input
                            type="text"
                            value={solutionName}
                            onChange={(e) => setSolutionName(e.target.value)}
                            placeholder="Ej. Sistema ERP Logística Cloud"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Tipo de Aplicación</label>
                        <select
                            value={appType}
                            onChange={(e) => setAppType(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm bg-white"
                        >
                            <option value="E-commerce">E-commerce / Tienda Online</option>
                            <option value="Enterprise ERP">Sistema Empresarial (ERP/CRM)</option>
                            <option value="Web App SaaS">Aplicación Web SaaS</option>
                            <option value="Big Data Analytics">Big Data & Analytics</option>
                            <option value="Mobile Backend">API & Mobile Backend</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Descripción de la Propuesta *</label>
                    <textarea
                        rows={2}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe el propósito del sistema..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Región AWS</label>
                        <select
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm bg-white"
                        >
                            {regions.map(reg => (
                                <option key={reg.id} value={reg.code}>{reg.name} ({reg.code})</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Usuarios/Mes</label>
                        <input
                            type="number"
                            value={estimatedUsers}
                            onChange={(e) => setEstimatedUsers(Number(e.target.value))}
                            min={0}
                            step={500}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Disponibilidad</label>
                        <select
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm bg-white"
                        >
                            <option value="99.9% (Estándar)">99.9% (Estándar)</option>
                            <option value="99.99% (Alta Disponibilidad)">99.99% (Multi-AZ)</option>
                            <option value="99.999% (Mission Critical)">99.999% (Critical)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Servicios AWS Seleccionados ({selectedServices.length})
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {awsServices.map(service => {
                            const isSelected = selectedServices.includes(service.id);
                            return (
                                <button
                                    type="button"
                                    key={service.id}
                                    onClick={() => onServiceToggle(service.id)}
                                    title={`${service.name}: ${service.description}`}
                                    className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${isSelected ? 'bg-blue-50 border-blue-500 text-blue-900' : 'bg-white border-slate-200 text-slate-700'
                                        }`}
                                >
                                    <input type="checkbox" checked={isSelected} onChange={() => { }} className="w-4 h-4 text-blue-600 pointer-events-none shrink-0" />
                                    <div className="min-w-0">
                                        <span className="block text-sm font-bold truncate">{service.name.replace(/^AWS\s/, '').split(' (')[0]}</span>
                                        <span className="block text-xs leading-snug text-slate-600 font-normal line-clamp-3">{service.purpose}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Objetivo de la Migración</label>
                    <select
                        value={migrationGoal}
                        onChange={(e) => setMigrationGoal(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 text-sm bg-white"
                    >
                        <option value="Escalabilidad y Reducción de Costos">Escalabilidad y Reducción de Costos</option>
                        <option value="Escalabilidad y Rendimiento Global">Escalabilidad y Rendimiento Global</option>
                        <option value="Alta Disponibilidad y Resiliencia">Alta Disponibilidad y Resiliencia</option>
                        <option value="Modernización y Migración a la Nube">Modernización y Migración a la Nube</option>
                        <option value="Seguridad y Cumplimiento Normativo">Seguridad y Cumplimiento Normativo</option>
                        <option value="Optimización de Rendimiento">Optimización de Rendimiento</option>
                        <option value="Continuidad de Negocio y Recuperación ante Desastres">Continuidad de Negocio y Recuperación ante Desastres</option>
                    </select>
                </div>

                <div className="pt-3 flex justify-end border-t border-slate-100">
                    <button
                        type="submit"
                        className="w-full px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-blue-600/30 cursor-pointer"
                    >
                        Guardar Propuesta
                    </button>
                </div>
            </form>
        </div>
    );
};