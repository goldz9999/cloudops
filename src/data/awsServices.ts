import type { AWSService } from '../types/cloud';

export const awsServicesData: AWSService[] = [
  {
    id: 'ec2',
    name: 'EC2 (Elastic Compute Cloud)',
    category: 'Compute',
    description: 'Servicio de computación escalable para ejecutar aplicaciones en la nube.',
    purpose: 'Ejecutar servidores virtuales y cargas de trabajo empresariales.',
    status: 'in-use',
  },
  {
    id: 's3',
    name: 'S3 (Simple Storage Service)',
    category: 'Storage',
    description: 'Almacenamiento de objetos altamente escalable, seguro y duradero.',
    purpose: 'Guardar backups, assets estáticos y archivos de usuario.',
    status: 'in-use',
  },
  {
    id: 'rds',
    name: 'RDS (Relational Database Service)',
    category: 'Database',
    description: 'Base de datos relacional administrada fácil de configurar y escalar.',
    purpose: 'Gestionar bases de datos transaccionales (PostgreSQL/MySQL).',
    status: 'in-use',
  },
  {
    id: 'vpc',
    name: 'VPC (Virtual Private Cloud)',
    category: 'Networking',
    description: 'Recursos de red aislados lógicamente para tu infraestructura AWS.',
    purpose: 'Controlar subredes, tablas de enrutamiento y pasarelas de internet.',
    status: 'in-use',
  },
  {
    id: 'iam',
    name: 'IAM (Identity and Access Management)',
    category: 'Security',
    description: 'Gestión segura de accesos a servicios y recursos de AWS.',
    purpose: 'Administrar usuarios, roles, políticas y MFA bajo principio de menor privilegio.',
    status: 'in-use',
  },
  {
    id: 'route53',
    name: 'Route 53',
    category: 'Networking',
    description: 'Servicio DNS web altamente disponible y escalable.',
    purpose: 'Enrutar tráfico de usuarios hacia la infraestructura global.',
    status: 'in-use',
  },
  {
    id: 'cloudfront',
    name: 'CloudFront',
    category: 'Content Delivery',
    description: 'Red de entrega de contenidos (CDN) rápida y segura.',
    purpose: 'Acelerar la entrega de contenido estático y dinámico a nivel global.',
    status: 'in-use',
  },
  {
    id: 'lambda',
    name: 'AWS Lambda',
    category: 'Compute',
    description: 'Computación sin servidor (serverless) orientada a eventos.',
    purpose: 'Ejecutar código backend sin aprovisionar servidores.',
    status: 'available',
  }
];