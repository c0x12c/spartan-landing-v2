import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { TService } from '../home/OurServicesV2';
import Image from 'next/image';

type Props = {
  data: TService;
};

export const Card: FC<Props> = ({ data, ...props }) => {
  return (
    <Stack
      p={3}
      border={'1px solid rgba(0, 0, 0, 0.10)'}
      borderRadius={3}
      gap={3}
      minHeight={300}
      {...props}
    >
      <Image src={data.imgSrc} alt={data.title} />
      <Stack gap={1.5}>
        <Typography variant="fs24" fontWeight={600} lineHeight={1.2} color={'black'}>
          {data.title}
        </Typography>
        <Typography variant="fs16" fontWeight={400} lineHeight={1.2} color={'#86868B'}>
          {data.desc}
        </Typography>
      </Stack>
    </Stack>
  );
};
