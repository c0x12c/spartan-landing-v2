import PrimaryTitle from '@/components/atoms/typography/PrimaryTitle';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { gray } from '@/styles/colors';
import { Box } from '@mui/material';
import React from 'react';

const Requirements = ({ list }: { list: string[] }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Box>
      <PrimaryTitle text="Responsibilities" sx={{ mb: '8px' }} />
      <ul style={{ listStyle: 'inside' }}>
        {list.map((item, index) => {
          return (
            <li key={index} style={{ fontSize: isMobile ? '14px' : '16px', color: gray[600] }}>
              {item}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Requirements;
