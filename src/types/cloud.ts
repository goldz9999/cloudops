export type AWSServiceStatus = 'in-use' | 'available' | 'not-used';

export interface AWSService {
  id: string;
  name: string;
  category: 'Compute' | 'Storage' | 'Database' | 'Security' | 'Networking' | 'Content Delivery' | 'Management';
  description: string;
  purpose: string;
  status: AWSServiceStatus;
  pricing: string;
  hasFreeTier: boolean;
  freeTierDetail: string;
}

export interface AWSRegion {
  id: string;
  name: string;
  code: string;
  location: string;
  status: 'Operational' | 'Warning' | 'Maintenance';
  deployedServices: number;
}

export interface CloudCostItem {
  id: string;
  serviceId: string;
  serviceName: string;
  quantity: number;
  hours: number;
    hourlyRate: number;
  region?: string;
}

export interface CloudPlan {
  id: string;
  solutionName: string;
  appType: string;
  description: string;
  region: string;
  estimatedUsers: number;
  availability: string;
  selectedServices: string[];
  migrationGoal: string;
  createdAt: string;
}

export interface SecurityCheckItem {
  id: string;
  category: string;
  metric: string;
  value: string;
  status: 'correct' | 'warning' | 'error';
  description: string;
}