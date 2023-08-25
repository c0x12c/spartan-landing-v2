import featureImage1 from '@/assets/images/life-spartan/feature-1.webp';
import featureImage2 from '@/assets/images/life-spartan/feature-2.webp';
import featureImage3 from '@/assets/images/life-spartan/feature-3.webp';
import tickYellow from '@/assets/images/icons/tick-yellow-2.svg';
import tickBlue from '@/assets/images/icons/tick-blue.svg';
import tickGreen from '@/assets/images/icons/tick-green.svg';
import { StaticImageData } from 'next/image';
import { Typography } from '@mui/material';
import { base } from '@/styles/colors';

export type FeatureType = {
  id: string;
  title: string;
  description: string;
  imgSrc: StaticImageData;
  subContent: {
    id: string;
    content: React.ReactNode;
    tick: StaticImageData;
  }[];
};

export const Features = [
  {
    id: 'feature-1',
    title: 'Have a safe and secure career',
    description:
      'Our Spartans have access to challenging projects, cutting-edge technologies, and collaborative work environments that foster creativity and innovation. We provide the necessary resources and support to help our employees excel in their roles.',
    imgSrc: featureImage1,
    subContent: [
      {
        id: 'sub-content-1',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            We recruit passionate engineers <br /> who share our vision
          </Typography>
        ),
        tick: tickYellow,
      },
      {
        id: 'sub-content-2',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            We provide challenging tasks to enhance <br /> their skills
          </Typography>
        ),
        tick: tickBlue,
      },
      {
        id: 'sub-content-3',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            We empower them to make significant <br /> decisions and grow with the business
          </Typography>
        ),
        tick: tickGreen,
      },
    ],
  },
  {
    id: 'feature-2',
    title: 'Financial stability and a secure future',
    description:
      "We believe in investing in our employees' long-term success and the importance of financial stability in creating a sense of security and peace of mind. Our Spartans got the most exciting benefits packages for their career here.",
    imgSrc: featureImage2,
    subContent: [
      {
        id: 'sub-content-2.1',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            Work from anywhere
          </Typography>
        ),
        tick: tickYellow,
      },
      {
        id: 'sub-content-2.2',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            Unlimited paid time off (PTO)
          </Typography>
        ),
        tick: tickBlue,
      },
      {
        id: 'sub-content-2.3',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            Competitive compensation packages
          </Typography>
        ),
        tick: tickGreen,
      },
    ],
  },
  {
    id: 'feature-3',
    title: 'Achieve a healthy work-life balance',
    description:
      "We understand the importance of personal well-being and a healthy lifestyle. We offer a range of benefits and initiatives to support our employees' overall well-being. We believe that a fulfilling personal life enables them to bring their best selves to work.",
    imgSrc: featureImage3,
    subContent: [
      {
        id: 'sub-content-3.1',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            Covering the cost of participating in <br /> sports activities
          </Typography>
        ),
        tick: tickYellow,
      },
      {
        id: 'sub-content-3.2',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            Annual company travel and an intimate intimate party <br /> every month
          </Typography>
        ),
        tick: tickBlue,
      },
      {
        id: 'sub-content-3.3',
        content: (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            Comprehensive health insurance for <br /> you and your loved one
          </Typography>
        ),
        tick: tickGreen,
      },
    ],
  },
];
