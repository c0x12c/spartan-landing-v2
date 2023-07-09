import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { FeatureType } from '@/constants/features';
import { base } from '@/styles/colors';
import Image from 'next/image';

interface ICardFeature {
  title?: string;
}

type SubContentType = FeatureType['subContent'][number];

export const CardFeature: React.FunctionComponent<ICardFeature & SubContentType> = ({
  title,
  content,
  tick,
  ...props
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      borderRadius="4px"
      bgcolor={base.white}
      p={title ? '11px 25px' : '8px'}
      gap={title ? '24px' : 0}
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
      <Box>
        {title && (
          <Typography
            variant="fs16"
            color={base.black}
            fontWeight="600"
            lineHeight="1.8"
            component="h3"
            mb="8px"
          >
            {title}
          </Typography>
        )}
        {typeof content === 'string' ? (
          <Typography variant="fs14" color={base.grey} letterSpacing="0.21px">
            {content}
          </Typography>
        ) : (
          content
        )}
      </Box>
    </Box>
  );
};
