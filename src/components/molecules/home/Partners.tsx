import * as React from 'react';
import { BodyText, Container, Title } from '@/components/atoms';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Clients as ClientsData, sampleData } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IPartnersProps {}

export const Partners: React.FunctionComponent<IPartnersProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const delta = ClientsData.length % 2;
  const sampleList = Array.from({ length: delta }).map((_, i) => {
    return { ...sampleData, id: `sample-${i + 1}` };
  });

  const renderBiz = [...ClientsData, ...sampleList].map((item) => {
    return (
      <Box key={item.id} gridColumn="span 4" p="36px 22px" bgcolor="white">
        {item.imgSrc && (
          <Image src={item.imgSrc} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
        )}
      </Box>
    );
  });

  return (
    <Box py={isMobile ? '40px' : '120px'}>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={isMobile ? 'column' : 'row'}
          gap="24px"
        >
          <Stack gap="24px" maxWidth={isMobile ? '100%' : '535px'}>
            <Title
              text="Embracing fully remote engineers for your business's success"
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <BodyText
              text="Our clients include startups, established businesses, and enterprises who trust us to deliver exceptional engineering solutions for their products and projects. Join these successful companies who have trusted Spartan to enable their success."
              data-aos="fade-up"
              data-aos-delay="500"
              sx={{
                maxWidth: '700px',
                mt: isMobile ? '12px' : 0,
              }}
            />
          </Stack>
          <Stack gap="24px" maxWidth={isMobile ? '100%' : '585px'}>
            <Typography variant="fs18">Who we work with</Typography>
            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gap="1px"
              overflow="hidden"
              bgcolor="rgba(0, 0, 0, 0.10)"
            >
              {renderBiz}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
