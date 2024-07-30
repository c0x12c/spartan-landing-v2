import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { Fragment } from 'react';
import all_employee_desktop from '@/assets/images/team/all-employee-desktop.png';
import all_employee_mobile from '@/assets/images/team/all-employee-mobile.png';
import all_employee_tablet from '@/assets/images/team/all-employee-tablet.png';
import Image from 'next/image';
import Arrow from '@/assets/images/icons/arrow-right-black.svg';
import Link from 'next/link';

const achievements = [
  {
    title: '15+',
    desc: 'Years of experience',
  },
  {
    title: '2',
    desc: 'IPOs',
  },
  {
    title: '100%',
    desc: 'Customers are satisfied ',
  },
  {
    title: '99%',
    desc: 'Wish to continue working with Spartan',
  },
];

export const WhyBusinessV2 = () => {
  const isPhone = useIsPhone();
  const isTablet = useIsTablet();

  return (
    <Stack maxWidth={1440} margin={'auto'} px={{ xs: 2, md: 5 }} py={{ xs: 6, md: 6 }} gap={10}>
      <Grid2 container spacing={9}>
        {achievements.map((elem, index) => {
          return (
            <Fragment key={elem.title}>
              <Grid2 gap={1} xs={6} md={3} data-aos="fade-up" data-aos-delay="200">
                <Stack gap={1} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                  <Typography
                    variant={isPhone ? 'fs48' : isTablet ? 'fs56' : 'fs64'}
                    fontWeight={600}
                    lineHeight={1.2}
                    color={'black'}
                  >
                    {elem.title}
                  </Typography>
                  <Typography
                    variant={'fs16'}
                    fontWeight={500}
                    lineHeight={1.6}
                    color={'#86868B'}
                    maxWidth={{ xs: 140, md: 'unset' }}
                  >
                    {elem.desc}
                  </Typography>
                </Stack>
              </Grid2>
              {index !== achievements.length - 1 && (
                <Divider
                  data-aos="fade-up"
                  data-aos-delay="200"
                  key={`${elem.title}-divider`}
                  orientation="vertical"
                  flexItem
                  sx={{ mr: '-1px' }}
                />
              )}
            </Fragment>
          );
        })}
      </Grid2>
      <Stack alignItems={'center'}>
        <Image
          data-aos="zoom-in-up"
          data-aos-delay="200"
          src={
            isPhone ? all_employee_mobile : isTablet ? all_employee_tablet : all_employee_desktop
          }
          alt="all-employee"
        />
      </Stack>
      <Stack
        gap={3}
        direction={{ xs: 'column', lg: 'row' }}
        alignItems={{ xs: 'flex-start', lg: 'center' }}
      >
        <Typography
          variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
          fontWeight={500}
          lineHeight={1.2}
          color={'black'}
          maxWidth={isTablet ? 790 : 'unset'}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Lift your{' '}
          <Typography
            variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
            fontWeight={300}
            lineHeight={1.2}
            color={'black'}
            fontStyle={'italic'}
          >
            business
          </Typography>{' '}
          to new heights with our software services
        </Typography>
        <Stack gap={5}>
          <Typography
            variant={isPhone ? 'fs16' : 'fs20'}
            fontWeight={500}
            lineHeight={2}
            color={'#86868B'}
            maxWidth={isPhone ? 340 : 'unset'}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Spartan delivers tailored offshoring solutions for businesses of all sizes to meet your
            unique needs.
          </Typography>
          <Box sx={{ display: 'inline-flex' }}>
            <Button
              data-aos="fade-right"
              data-aos-delay="200"
              endIcon={<Image src={Arrow} alt="arrow-right" />}
              variant="outlined"
              sx={{
                borderColor: 'black',
                '&:hover': {
                  borderColor: 'black',
                },
                color: 'black',
              }}
              href={'/spartan-operates'}
              LinkComponent={Link}
            >
              How we work
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
