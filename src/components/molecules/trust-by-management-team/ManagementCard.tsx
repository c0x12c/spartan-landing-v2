import { BreakPoints, useBreakpoint, useIsPhone } from '@/hooks/useBreakPoints';
import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import star_icon from '@/assets/images/trust-management-team/material-symbols_star.png';
import Image from 'next/image';
import { TManagementTeam } from './TrustByManagementTeam';

type Props = {
  data: TManagementTeam;
};

export const ManagementCard: FC<Props> = ({ data }) => {
  const isMobile = useBreakpoint(BreakPoints.LG);
  const isPhone = useIsPhone();
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'center', sm: 'flex-start' }}
      bgcolor="#101010"
      borderRadius={2}
      maxWidth={{ xs: 'none', sm: '700px', lg: '900px' }}
    >
      <Stack
        position={'relative'}
        width={{ xs: '100%', sm: '260px', lg: '337px' }}
        height={{ xs: '280px', sm: '295px', lg: '380px' }}
      >
        <Image
          src={data.avatarSrc}
          alt="avatar"
          style={{
            borderTopLeftRadius: isPhone ? '8px' : '8px',
            borderTopRightRadius: isPhone ? '8px' : '0px',
            borderBottomLeftRadius: isPhone ? '0px' : '8px',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </Stack>
      <Stack
        p={3}
        gap={{ xs: 1 }}
        flex={1}
        height={{ xs: 'none', sm: '295px', lg: '380px' }}
        justifyContent={'space-between'}
      >
        <Stack gap={1}>
          <Stack direction={'row'} gap={0.5} alignItems={'center'}>
            {Array.from({ length: 5 }, (v, i) => {
              return (
                <Stack
                  key={i}
                  width={{ xs: '12.5px', sm: '16px', md: '24px' }}
                  height={{ xs: '12.5px', sm: '16px', md: '24px' }}
                >
                  <Image src={star_icon} alt="star" style={{ width: '100%', height: '100%' }} />
                </Stack>
              );
            })}
          </Stack>
          <Typography
            variant={isMobile ? 'fs16' : 'fs20'}
            fontWeight={300}
            lineHeight={1.6}
            color={'#86868B'}
          >
            {data.desc}
          </Typography>
        </Stack>

        <Stack marginTop={2} gap={1}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography
              variant={isMobile ? 'fs16' : 'fs20'}
              fontWeight={500}
              lineHeight={1.3}
              color={'white'}
            >
              {data.name}
            </Typography>
            <Image src={data.iconSrc} alt="icon" />
          </Stack>
          <Typography
            variant={isMobile ? 'fs16' : 'fs20'}
            fontWeight={300}
            fontSize={{ xs: 12 }}
            lineHeight={1.3}
            color={'white'}
          >
            {data.position}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
