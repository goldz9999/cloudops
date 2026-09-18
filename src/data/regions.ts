import type { AWSRegion } from '../types/cloud';

export const regionsData: AWSRegion[] = [
  {
    id: 'us-east-1',
    name: 'US East (N. Virginia)',
    code: 'us-east-1',
    location: 'Virginia, USA',
    status: 'Operational',
    deployedServices: 7,
    azs: ['us-east-1a', 'us-east-1b', 'us-east-1c', 'us-east-1d', 'us-east-1e', 'us-east-1f'],
  },
  {
    id: 'us-west-2',
    name: 'US West (Oregon)',
    code: 'us-west-2',
    location: 'Oregon, USA',
    status: 'Operational',
    deployedServices: 4,
    azs: ['us-west-2a', 'us-west-2b', 'us-west-2c', 'us-west-2d'],
  },
  {
    id: 'eu-west-1',
    name: 'Europe (Ireland)',
    code: 'eu-west-1',
    location: 'Dublin, Ireland',
    status: 'Operational',
    deployedServices: 5,
    azs: ['eu-west-1a', 'eu-west-1b', 'eu-west-1c'],
  },
  {
    id: 'ap-northeast-1',
    name: 'Asia Pacific (Tokyo)',
    code: 'ap-northeast-1',
    location: 'Tokyo, Japan',
    status: 'Warning',
    deployedServices: 3,
    azs: ['ap-northeast-1a', 'ap-northeast-1b', 'ap-northeast-1c', 'ap-northeast-1d'],
  },
];