import * as React from 'react';
import { Box } from '@mui/material';
import { FeatureType } from '@/constants/features';
import { base } from '@/styles/colors';
import Image from 'next/image';

type SubContentType = FeatureType['subContent'][number];

export const CardFeature: React.FunctionComponent<SubContentType> = ({
  content,
  tick,
  ...props
}) => {
  return (
    <Box
      display="flex"
      borderRadius="4px"
      bgcolor={base.white}
      p="8px"
      width="fit-content"
      {...props}
    >
      <Box
        width="40px"
        height="40px"
        borderRadius="48px"
        boxShadow="1px 1px 20px 0px rgba(0, 0, 0, 0.05)"
        display="flex"
        p="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={tick} alt="tick" />
      </Box>
      {content}
    </Box>
  );
};
