import React, { FC } from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks/useBreakPoints';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Project } from '../home/OurProjects';
import Link from 'next/link';

type Props = {
  data: Project;
};

export const ProjectCard: FC<Props> = ({ data }) => {
  const isMobile = useBreakpoint(BreakPoints.LG);
  return (
    <Stack
      borderRadius={2}
      border="1px solid rgba(0, 0, 0, 0.10)"
      p={2}
      gap={2}
      sx={{
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      component={Link}
      href={data.href}
    >
      <Stack sx={{ overflow: 'hidden' }}>
        <Image
          src={data.imgSrc}
          alt="project"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </Stack>
      <Stack gap={1}>
        <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
          <Stack sx={{ overflow: 'hidden', width: '28px', height: '28px' }}>
            <Image
              src={data.iconSrc}
              alt="icon"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Stack>
          <Typography
            variant={isMobile ? 'fs18' : 'fs20'}
            fontWeight={600}
            lineHeight={1.6}
            color={'#555'}
          >
            {data.name}
          </Typography>
        </Stack>
        <Typography
          variant={isMobile ? 'fs14' : 'fs16'}
          fontWeight={400}
          lineHeight={1.6}
          color={'#555'}
        >
          {data.desc}
        </Typography>
      </Stack>
    </Stack>
  );
};
