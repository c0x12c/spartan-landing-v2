import { base, gray, primary } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const JobListItem = ({
  position,
  tag,
  experienceLevel,
  enrollmentStatus,
  href,
}: {
  position: string;
  tag: string;
  experienceLevel: string;
  enrollmentStatus: string[];
  href: string;
}) => {
  return (
    <Box
      component={Link}
      href={href}
      p={'24px'}
      bgcolor={base.white}
      borderRadius={'8px'}
      border={` 1px solid ${gray[200]}`}
      sx={{
        ':hover': {
          bgcolor: primary[200],
          borderColor: primary[200],
        },
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <Typography variant="fs20" fontWeight={600} mb={'8px'} color={base.black}>
        {position}
      </Typography>
      <Typography fontSize={'12px'} color={primary[400]} mb={'16px'}>
        {tag}
      </Typography>
      <Typography variant="fs20" fontWeight={600} mb={'12px'} color={base.black}>
        Competitive salary
      </Typography>
      <Typography
        component={'p'}
        variant="fs18"
        fontSize={'14px'}
        color={gray[600]}
        textTransform={'uppercase'}
      >
        {experienceLevel} |{' '}
        <Typography component={'span'} variant="fs18" fontSize={'14px'} color={primary[400]}>
          {enrollmentStatus.join(', ')}
        </Typography>
      </Typography>
    </Box>
  );
};

export default JobListItem;
