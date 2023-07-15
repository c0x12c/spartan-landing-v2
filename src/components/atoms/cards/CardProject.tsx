import * as React from 'react';
import { ProjectType } from '@/constants';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ArrowIcon } from '..';
import { base, gray, primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { useRouter } from 'next/router';

interface ICardProjectProps {
  item: ProjectType;
  onClick?: (e: React.MouseEvent, callback: () => void) => void;
}

export const CardProject: React.FunctionComponent<ICardProjectProps> = ({ item, onClick }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  const router = useRouter();

  return (
    <Box
      position="relative"
      overflow="hidden"
      p="12px"
      borderRadius="8px"
      bgcolor={base.white}
      onClick={(e) => {
        if (onClick) {
          onClick(e, () => {
            router.push(item.href);
          });
        }
      }}
      boxShadow={isMobile ? '0px 10px 47px 0px #EFEFEF' : 'none'}
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
      <Box display="flex" flexDirection="column" gap="8px" pt="12px">
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
  );
};
