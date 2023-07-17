import { base } from '@/styles/colors';
import { gray } from '@/styles/colors';
import { Typography, Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { BodyText } from './typography/BodyText';

export enum Variant {
  LIST = 'list',
  PARAGRAPH = 'paragraph',
  NO_TITLE = 'no title',
}

interface CaseStudyItemProps {
  icon: StaticImageData;
  title?: string;
  content?: string;
  list?: string[];
  variant: Variant;
}

const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ icon, title, content, list, variant }) => {
  switch (variant) {
    case Variant.LIST:
      return (
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: '0', md: '4px' }}
          data-aos={'fade-up'}
          data-aos-delay="200"
        >
          <Box display="flex" alignItems="center" gap={{ xs: '16px', md: '24px' }}>
            <Image src={icon} alt="checked" />
            <Typography variant="fs16" fontWeight={600} color={gray[700]} maxWidth="675px">
              {title}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={{ xs: '16px', md: '24px' }}>
            <Box minWidth="45px" height="45px"></Box>
            <ul
              style={{
                maxWidth: '100%',
                listStylePosition: 'outside',
              }}
            >
              {list?.map((text, index) => (
                <li key={index}>
                  <Typography
                    fontWeight={400}
                    variant="fs18"
                    fontSize={{ xs: '14px', md: '18px' }}
                    component="span"
                  >
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      );

    case Variant.PARAGRAPH:
      return (
        <Box
          display="flex"
          flexDirection="column"
          gap="4px"
          data-aos={'fade-up'}
          data-aos-delay="200"
        >
          <Box display="flex" alignItems="center" gap="24px">
            <Image src={icon} alt="checked" />
            <Typography
              variant="fs18"
              fontSize={{ xs: '16px', md: '18px' }}
              fontWeight={600}
              color={base.black}
              maxWidth="675px"
            >
              {title}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="24px">
            <Box width="45px" height="45px"></Box>
            <Typography variant="fs14" color={gray[600]} maxWidth="calc(100% - 45px - 24px)">
              {content}
            </Typography>
          </Box>
        </Box>
      );

    case Variant.NO_TITLE:
      return (
        <Box
          display="flex"
          alignItems="start"
          data-aos="fade-up"
          data-aos-delay="200"
          gap={{ xs: '16px', md: '24px' }}
        >
          <Image src={icon} alt="icon" />
          <BodyText text={content ? content : ''} sx={{ color: base.grey }} />
        </Box>
      );

    default:
      return null;
  }
};

export default CaseStudyItem;
