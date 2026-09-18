import type { CloudCostItem } from '../types/cloud';

export const initialCostItems: CloudCostItem[] = [
  { id: '1', serviceId: 'ec2', serviceName: 'EC2 (t3.medium)', quantity: 2, hours: 730, hourlyRate: 0.0416 },
  { id: '2', serviceId: 'rds', serviceName: 'RDS (db.m5.large)', quantity: 1, hours: 730, hourlyRate: 0.192 },
  { id: '3', serviceId: 's3', serviceName: 'S3 (Standard 500GB)', quantity: 1, hours: 730, hourlyRate: 0.023 },
  { id: '4', serviceId: 'cloudfront', serviceName: 'CloudFront (1TB Transfer)', quantity: 1, hours: 730, hourlyRate: 0.085 }
];