import type { SecurityCheckItem } from '../types/cloud';

export const securityChecksData: SecurityCheckItem[] = [
  { id: '1', category: 'IAM', metric: 'Multi-Factor Authentication (MFA)', value: '11 / 12 Users', status: 'warning', description: 'Un usuario administrador carece de MFA activo.' },
  { id: '2', category: 'IAM', metric: 'Principle of Least Privilege', value: '95% Compliant', status: 'correct', description: 'Políticas restrictivas aplicadas correctamente.' },
  { id: '3', category: 'Account', metric: 'Root Account Protection', value: 'Protected (Hardware MFA)', status: 'correct', description: 'Cuenta raíz asegurada con llave física.' },
  { id: '4', category: 'Data', metric: 'Encryption at Rest (KMS)', value: '100% Encrypted', status: 'correct', description: 'Volúmenes EBS y buckets S3 cifrados con KMS.' },
  { id: '5', category: 'Data', metric: 'Encryption in Transit (TLS/SSL)', value: 'Enforced', status: 'correct', description: 'Certificados ACM activos en CloudFront y ALB.' },
  { id: '6', category: 'Network', metric: 'Security Groups & NACLs', value: 'Strict Rules', status: 'correct', description: 'Puertos innecesarios cerrados desde internet.' }
];