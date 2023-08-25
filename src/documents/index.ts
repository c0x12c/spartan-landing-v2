import { ISEOPages, EPages } from './types';

export const hostname = 'https://spartan-dev.io';

const SEOPages: ISEOPages = {
  [EPages.HOME]: {
    title: 'Spartan | Startup in the box',
    description:
      'Unlock your startup’s software potential with Spartan’s all-inclusive solution. Our tailored package offers comprehensive services, expertise, and resources to streamline your software development and implementation. From architecture design to deployment and ongoing support, we empower startups to thrive in the digital landscape.',
    keywords:
      'Spartan, Spartan Dev, Technology solutions, Digital Transformation, Software development, Tech expertise, Agile delivery, Startup solutions.',
    metaImage: '/home-thumbnail.png',
    slug: '/',
  },
  [EPages.ABOUT_US]: {
    title: 'Spartan | About Us',
    description:
      'We are Spartan, a team of elite tech-savvy people who specialize in providing top-notch technical expertise to meet your goals. Our engineers are selected from the top 3%, signifying that they are not merely proficient coders but also exceptional engineers with a deep comprehension of the intricacies of software development.',
    keywords:
      'Mission and vision, Company values, Team of experts, Experience and expertise, Client satisfaction, Industry recognition.',
    metaImage: '/home-thumbnail.png',
    slug: '/about-us',
  },
  [EPages.CASE_STUDY]: {
    title: 'Spartan | Discover our projects',
    description:
      'Share your concerns with us, and we are here to provide you with the best solutions from top-notch engineers around the world.',
    keywords:
      'Success stories, Project showcase, Client achievements, Innovative solutions, Business Impact, Project insights.',
    metaImage: '/home-thumbnail.png',
    slug: '/case-study',
  },
  [EPages.CONTACT_US]: {
    title: 'Spartan | Contact Us',
    description: 'Spartan | Contact Us',
    keywords:
      'Contact form, Spartan Contact, Get in touch, Reach out to us, Contact information, Customer support, Request a consultation, Inquiry and feedback.',
    metaImage: '/home-thumbnail.png',
    slug: '/contact-us',
  },
  [EPages.SERVICES]: {
    title: 'Spartan | Services',
    description: 'Spartan | Services',
    keywords:
      'Consulting services, Software solutions, Custom development, Digital strategy, IT consulting, Industry expertise.',
    metaImage: '/home-thumbnail.png',
    slug: '/services',
  },
  [EPages.SERVICES_WEB]: {
    title: 'Spartan | Create dynamic web applications',
    description: 'Your one-stop web development agency',
    keywords:
      'Web application development, Frontend development, Responsive design, User experience (UX), Web development frameworks, Scalable web solutions.',
    metaImage: '/home-thumbnail.png',
    slug: '/services/web-development',
  },
  [EPages.SERVICES_MOBILE]: {
    title: 'Spartan | Mobile App Development',
    description: 'Disruptive and customized mobile solution for all',
    keywords:
      'Mobile app design, iOS app development, Android app development, Cross-platform development, App user interface (UI), Mobile app optimization.',
    metaImage: '/home-thumbnail.png',
    slug: '/services/mobile-app',
  },
  [EPages.SERVICES_CLOUD]: {
    title: 'Spartan | Cloud Solutions',
    description: 'Migrate your offline business to the cloud',
    keywords:
      'Cloud infrastructure, AWS services, Google Cloud solutions, Azure cloud platform, Scalability and reliability, Cloud migration.',
    metaImage: '/home-thumbnail.png',
    slug: '/services/cloud',
  },
  [EPages.SERVICES_BACKEND]: {
    title: 'Spartan | Backend Development',
    description: 'We build robust and scalable backend systems',
    keywords:
      'Backend architecture, API development, Database management, Server-side programming, Microservices, Scalable backend solutions.',
    metaImage: '/home-thumbnail.png',
    slug: '/services/backend',
  },
  [EPages.SERVICES_EMERGING]: {
    title: 'Spartan | Emerging Technologies',
    description: 'Empower your business with futuristic technology',
    keywords:
      'AI integration, IoT solutions, Blockchain technology, Machine learning, Augmented reality (AR), Data analytics.',
    metaImage: '/home-thumbnail.png',
    slug: '/services/emerging-technologies',
  },
  [EPages.CASE_STUDY_VOLTA]: {
    title: 'Spartan | Case Study - Volta',
    description: 'Spartan | Case Study - Volta',
    keywords: '',
    metaImage: '/volta-thumbnail.png',
    slug: '/case-study/volta',
  },
  [EPages.CASE_STUDY_AGORA]: {
    title: 'Spartan | Case Study - Live Cast',
    description: 'Spartan | Case Study - Live Cast',
    keywords: '',
    metaImage: '/agora-thumbnail.png',
    slug: '/case-study/live-cast',
  },
  [EPages.CASE_STUDY_URSA]: {
    title: 'Spartan | Case Study - URSA Live',
    description: 'Spartan | Case Study - URSA Live',
    keywords: '',
    metaImage: '/ursa-thumbnail.png',
    slug: '/case-study/ursa',
  },
  [EPages.CASE_STUDY_HERU]: {
    title: 'Spartan | Case Study - Heru',
    description: 'Spartan | Case Study - Heru',
    keywords: '',
    metaImage: '/home-thumbnail.png',
    slug: '/case-study/heru',
  },
  [EPages.LIFE_SPARTAN]: {
    title: 'Spartan | Life of Spartan',
    description: 'Explore our amazing life, people & what we care',
    keywords:
      'Company culture, Work-life balance, Professional Development, Team collaboration, Employee well-being, Fun and social activities.',
    metaImage: '/home-thumbnail.png',
    slug: '/life-spartan',
  },
  [EPages.INTERNSHIP]: {
    title: 'Spartan | Internship program',
    description: 'Sharpen your skills with our Internship',
    keywords:
      'Internship opportunities, Hands-on experience, Mentorship and guidance, Skill development, Industry exposure, Internship application process, Tech internship.',
    metaImage: '/home-thumbnail.png',
    slug: '/internship-program',
  },
  [EPages.READY_TO_JOIN]: {
    title: 'Spartan | Ready To Join?',
    description: 'Your opportunity is here. Click to join!',
    keywords: 'Spartan | Ready to join',
    metaImage: '/home-thumbnail.png',
    slug: '/ready-to-join',
  },
  [EPages.APPLY_JOB]: {
    title: "Spartan | Spartan's remote high-paying tech jobs",
    description:
      "Join 100+ of the world's best engineers & get full-time, long-term remote software jobs with better compensation and career growth.",
    keywords:
      'Job opportunities, Career openings, Join our team, Employment opportunities, Professional growth, Job application process.',
    metaImage: '/home-thumbnail.png',
    slug: '/apply-job',
  },
  [EPages.CASE_STUDY_LIQUIDITY]: {
    title: 'Spartan | Case study - Liquidity',
    description: 'Spartan | Case study - Liquidity',
    keywords: '',
    metaImage: '/home-thumbnail.png',
    slug: '/case-study/liquidity',
  },
  [EPages.CASE_STUDY_CF]: {
    title: 'Spartan | Case study - ChargeFuze',
    description: 'Spartan | Case study - ChargeFuze',
    keywords: '',
    metaImage: '/chargefuze-thumbnail',
    slug: '/case-study/chargefuze',
  },
  [EPages.NOT_FOUND]: {
    title: 'Spartan | Page not found',
    description: 'Spartan | Page not found',
    keywords: 'page not found',
    metaImage: '/home-thumbnail.png',
    slug: '*',
  },
  [EPages.SPARTAN_OPERATES]: {
    title: 'Spartan | How Spartan operates',
    description:
      'At Spartan, our top-notch engineers, product managers, and designers work closely with you to revolutionize your software development process.',
    keywords:
      'Agile methodology, Collaboration and communication, Transparent processes, Continuous improvement, Quality assurance, Project management.',
    metaImage: '/home-thumbnail.png',
    slug: '/how-spartan-operates',
  },
  [EPages.JOB_DETAILS]: {
    title: 'Spartan | Job Details',
    description: 'Job description and details',
    keywords: 'Job details, Job description, Job requirements',
    metaImage: '/home-thumbnail.png',
    slug: '/apply-job/[id]',
  },
};

export default SEOPages;
