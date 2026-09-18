import React from 'react';
import { Search, Filter } from 'lucide-react';

interface ServiceSearchFilterProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  categories: string[];
}

export const ServiceSearchFilter: React.FC<ServiceSearchFilterProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Buscador */}
      <div className="relative w-full md:w-96">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </span>
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar servicio por nombre..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-slate-50/50"
        />
      </div>

      {/* Filtro por Categoría */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <Filter className="w-4 h-4 text-slate-400 shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 shrink-0">Categoría:</span>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-48 px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 bg-white font-medium"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};