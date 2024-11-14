import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { BlockLayout } from '@/components/templates';

export const OurClients = () => {
  const isPhone = useIsPhone();
  const isTablet = useIsTablet();
  return (
    <Stack bgcolor={'black'}>
      <BlockLayout sx={{ gap: { xs: 6, md: 6 }, alignItems: 'center' }}>
        <Stack gap={4} px={4} data-aos="fade-up" data-aos-delay="200" alignItems={'center'}>
          <Typography
            variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
            fontWeight={500}
            lineHeight={1.2}
            color={'white'}
            maxWidth={640}
            textAlign={'center'}
          >
            Partnerships that fuel our success
          </Typography>
          <Typography
            variant={isPhone ? 'fs16' : 'fs20'}
            fontWeight={400}
            lineHeight={1.6}
            color={'#86868B'}
            maxWidth={isPhone ? 331 : isTablet ? 650 : 842}
            textAlign={'center'}
          >
            Collaborating with over 20 startups, we ensure a seamless experience. Whether
            you&apos;re a startup or an enterprise, we scale with your growth.
          </Typography>
        </Stack>

        <Stack
          width={{ xs: '96vw', lg: '1133px' }}
          height={{ xs: '917px', sm: '611px', lg: '436px' }}
          sx={{
            backgroundImage: {
              lg: 'url(/our-client-laptop.webp)',
              sm: 'url(/our-client-ipad.webp)',
              xs: 'url(/our-client.webp)',
            },
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        ></Stack>
      </BlockLayout>
    </Stack>
  );
};
