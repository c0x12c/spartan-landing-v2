import AIContent from '@/components/atoms/services/AIContent';
import DataPlatformContent from '@/components/atoms/services/DataPlatformContent';
import ITConsultingContent from '@/components/atoms/services/ITConsultingContent';
import IoTContent from '@/components/atoms/services/IoTContent';
import ProductDevelopmentContent from '@/components/atoms/services/ProductDevelopmentContent';
import QAContent from '@/components/atoms/services/QAContent';

export type ServiceType = {
  id: string;
  label: string;
  skills: string[];
  hash: string;
  content: string;
  component: () => JSX.Element;
};

export const Services = [
  {
    id: 'service-1',
    label: 'IT Consulting',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    hash: 'it-consulting',
    content:
      'Spartans is renowned for its affordable, reliable, and expert IT consulting services. We provide top-of-the-line technologies, software, and applications that help enterprises gain a competitive edge in the market.',
    component: ITConsultingContent,
  },
  {
    id: 'service-2',
    label: 'Product Development',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    hash: 'product-development',
    content:
      'We help enterprises navigating the best of the digital landscapes through our outsourced product development services that enable you to deliver highly productive outcomes.',
    component: ProductDevelopmentContent,
  },
  {
    id: 'service-3',
    label: 'Artificial Intelligence',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    hash: 'artificial-intelligence',
    content:
      "We offer all types and sizes of enterprises to leverage our 11+ years' expertise and experience, as we undoubtedly provide the best and the most reliable AI development services in the market.",
    component: AIContent,
  },
  {
    id: 'service-4',
    label: 'Data Platform',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    hash: 'data-platform',
    content:
      'Our comprehensive Data Platform service offers end-to-end solutions that cover everything from designing data architecture to developing pipelines, integrating data, establishing governance, warehousing, and conducting analytics. Our goal is to enable organizations to enhance their data quality, reliability, and accessibility, which can lead to improved business outcomes.',
    component: DataPlatformContent,
  },
  {
    id: 'service-5',
    label: 'Quality Assurance (QA) & Testing',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    hash: 'qa-testing',
    content:
      'We provide trusted, experts QA, and software testing services for mobile and web apps by using best practices and automated & manual testing methods.',
    component: QAContent,
  },
  {
    id: 'service-6',
    label: 'IoT Development',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    hash: 'iot-development',
    content:
      'Leverage our immense experience in IoT to launch a new IoT implementation, or to upgrade and integrate the existing ones most reliably and cost-effectively.',
    component: IoTContent,
  },
];
