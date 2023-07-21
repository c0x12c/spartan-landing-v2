import { BodyText } from '@/components/atoms';
import PrimaryTitle from '@/components/atoms/typography/PrimaryTitle';
import { Box } from '@mui/material';
import React from 'react';
import { BenefitsData } from '@/constants/benefits';
import { base, gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

const Benefits = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Box>
      <PrimaryTitle text="Benefits and perks" sx={{ mb: '8px' }} />
      <Box display={'flex'} flexDirection={'column'} gap={'16px'}>
        {BenefitsData.map((benefitGroup, index) => (
          <Box key={index}>
            <BodyText
              text={benefitGroup.title}
              sx={{
                fontWeight: 600,
                mb: '8px',
                color: base.black,
                fontSize: { xs: '18px', md: '18px' },
              }}
            />
            <ul style={{ listStyle: 'inside' }}>
              {benefitGroup.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  style={{
                    fontSize: isMobile ? '14px' : '16px',
                    color: gray[600],
                    maxWidth: '100%',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Benefits;
