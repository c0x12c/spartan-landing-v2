import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { Stack, SxProps, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

type Props = {
  imgSrc: StaticImageData;
  title: string;
  sx?: SxProps;
};

export const ProcessImageBlock: FC<Props> = ({ imgSrc, title, sx = {} }) => {
  const isPhone = useIsPhone();
  const isTablet = useIsTablet();
  return (
    <Stack
      display={'inline-flex'}
      position={'relative'}
      sx={sx}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Stack p={1.5} position={isPhone ? 'absolute' : 'relative'} maxWidth={190}>
        <Typography variant={isPhone ? 'fs14' : 'fs16'} fontWeight={500} color={'white'}>
          {title}
        </Typography>
      </Stack>
      <Stack
        width={isPhone ? '185px' : isTablet ? '197px' : '320px'}
        height={isPhone || isTablet ? '254px' : '412px'}
      >
        <Image src={imgSrc} alt={title} style={{ width: '100%' }} />
      </Stack>
    </Stack>
  );
};
