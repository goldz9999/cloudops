import React from 'react';
import type { AWSRegion } from '../../types/cloud';
import { RegionCard } from '../common/RegionCard';

interface RegionGridProps {
  regions: AWSRegion[];
}

export const RegionGrid: React.FC<RegionGridProps> = ({ regions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {regions.map((region) => (
        <RegionCard key={region.id} region={region} />
      ))}
    </div>
  );
};