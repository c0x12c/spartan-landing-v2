import * as React from 'react';
import { ProjectType } from '@/constants';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from '..';
import { base, gray, primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ICardProjectProps {
  item: ProjectType;
}

export const CardProject: React.FunctionComponent<ICardProjectProps> = ({ item }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Link href={item.href}>
      <Box
        position="relative"
        overflow="hidden"
        p="12px"
        borderRadius="8px"
        bgcolor={base.white}
        sx={{
          '&:hover': {
            boxShadow: '0px 10px 47px 0px #EFEFEF',
            '& .button-link': {
              color: primary[500],
              transition: 'color 0.3s ease',
            },
            '& .arrow-icon path': {
              stroke: primary[500],
              transition: 'stroke 0.3s ease',
            },
          },
        }}
      >
        <Image
          src={item.quote.imgSrc}
          alt={item.name}
          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
        />
        <Box display="flex" flexDirection="column" gap="8px">
          <Typography variant={isMobile ? 'fs16' : 'fs18'} fontWeight={600} color={base.black}>
            {item.name}
          </Typography>
          <Typography
            variant="fs14"
            letterSpacing="0.21px"
            color={gray[500]}
            maxWidth="360px"
            whiteSpace="normal"
          >
            {item.content}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="fs14" fontWeight={600} color={gray[400]} className="button-link">
              Read more
            </Typography>
            <ArrowIcon color={gray[400]} />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};