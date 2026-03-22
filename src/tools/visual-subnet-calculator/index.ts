import { WorldUpload } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Visual Subnet Calculator',
  path: '/visual-subnet-calculator',
  description: 'A tool for quickly designing networks and collaborating on that design with others. It focuses on expediting the work of network administrators, not academic subnetting math.',
  keywords: ['visual', 'subnet', 'network', 'calculator'],
  component: () => import('./visual-subnet-calculator.vue'),
  icon: WorldUpload,
  createdAt: new Date('2026-03-15'),
  category: 'Network',
});
