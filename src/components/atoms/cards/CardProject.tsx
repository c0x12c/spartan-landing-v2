import * as React from 'react';
import { ProjectType } from '@/constants';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from '..';
import { base, gray } from '@/styles/colors';

interface ICardProjectProps {
  item: ProjectType;
}

export const CardProject: React.FunctionComponent<ICardProjectProps> = ({ item }) => {
  return (
    <Link href={item.href}>
      <Box
        position="relative"
        overflow="hidden"
        p="12px"
        borderRadius="8px"
        bgcolor={base.white}
        boxShadow="0px 10px 47px 0px #EFEFEF"
      >
        <Image
          src={item.imgSrc}
          alt={item.name}
          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
        />
        <Box display="flex" flexDirection="column" gap="8px">
          <Typography variant="fs18" fontWeight={600} color={base.black}>
            {item.name}
          </Typography>
          <Typography
            variant="fs14"
            letterSpacing="0.21px"
            color={gray[500]}
            width="360px"
            whiteSpace="normal"
          >
            {item.content}
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="fs14" fontWeight={600} color={gray[400]}>
              Read more
            </Typography>
            <ArrowIcon color={gray[400]} />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
