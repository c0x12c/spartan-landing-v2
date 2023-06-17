export type ServiceType = {
  id: string;
  label: string;
  skills: string[];
  href: string;
  content: string;
};

export const Services = [
  {
    id: 'service-1',
    label: 'IT Consulting',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    href: '/',
    content:
      'Spartans is renowned for its affordable, reliable, and expert IT consulting services. We provide top-of-the-line technologies, software, and applications that help enterprises gain a competitive edge in the market.',
  },
  {
    id: 'service-2',
    label: 'Product Development',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    href: '/',
    content:
      'We help enterprises navigating the best of the digital landscapes through our outsourced product development services that enable you to deliver highly productive outcomes.',
  },
  {
    id: 'service-3',
    label: 'Artificial Intelligence',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    href: '/',
    content:
      "We offer all types and sizes of enterprises to leverage our 11+ years' expertise and experience, as we undoubtedly provide the best and the most reliable AI development services in the market.",
  },
  {
    id: 'service-4',
    label: 'Data Platform',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    href: '/',
    content:
      'Our comprehensive Data Platform service offers end-to-end solutions that cover everything from designing data architecture to developing pipelines, integrating data, establishing governance, warehousing, and conducting analytics. Our goal is to enable organizations to enhance their data quality, reliability, and accessibility, which can lead to improved business outcomes.',
  },
  {
    id: 'service-5',
    label: 'Quality Assurance (QA) & Testing',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    href: '/',
    content:
      'We provide trusted, experts QA, and software testing services for mobile and web apps by using best practices and automated & manual testing methods.',
  },
  {
    id: 'service-6',
    label: 'IoT Development',
    skills: ['Research & Development', 'Rapid prototyping', 'Scoping Session'],
    href: '/',
    content:
      'Leverage our immense experience in IoT to launch a new IoT implementation, or to upgrade and integrate the existing ones most reliably and cost-effectively.',
  },
];
