import type { AWSRegion } from '../types/cloud';

export const regionsData: AWSRegion[] = [
  {
    id: 'us-east-1',
    name: 'US East (N. Virginia)',
    code: 'us-east-1',
    location: 'Virginia, USA',
    status: 'Operational',
    deployedServices: 7,
  },
  {
    id: 'us-west-2',
    name: 'US West (Oregon)',
    code: 'us-west-2',
    location: 'Oregon, USA',
    status: 'Operational',
    deployedServices: 4,
  },
  {
    id: 'eu-west-1',
    name: 'Europe (Ireland)',
    code: 'eu-west-1',
    location: 'Dublin, Ireland',
    status: 'Operational',
    deployedServices: 5,
  },
  {
    id: 'ap-northeast-1',
    name: 'Asia Pacific (Tokyo)',
    code: 'ap-northeast-1',
    location: 'Tokyo, Japan',
    status: 'Warning',
    deployedServices: 3,
  }
];