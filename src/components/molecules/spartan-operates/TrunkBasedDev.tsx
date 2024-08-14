import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box } from '@mui/material';
import { BodyText, Container, Title } from '@/components/atoms';
import Image from 'next/image';
import { base } from '@/styles/colors';
import TrunkBasedImage from '@/assets/images/spartan-operates/trunk-based.webp';

interface ITrunkBasedDevProps {}

export const TrunkBasedDev: React.FunctionComponent<ITrunkBasedDevProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isMobile ? '40px' : '96px'}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          gap={isMobile ? '16px' : '24px'}
          flex="1"
          mb={isMobile ? '32px' : '64px'}
        >
          <Title
            text="Trunk based development and daily release"
            sx={{
              fontSize: isMobile ? '18px' : '48px',
              maxWidth: isMobile ? '280px' : '100%',
              color: base.black,
              textAlign: 'center',
              mx: 'auto',
            }}
            data-aos="fade-down"
            data-aos-duration="1000"
          />
          <BodyText
            data-aos="fade-up"
            data-aos-duration="1000"
            text="Trunk-based development and daily releases are closely intertwined in our software development process. With trunk-based development, all developers collaborate on a single branch, enabling faster integration and reducing complexities. This approach seamlessly aligns with our daily release strategy, where we deploy software updates and features to production on a daily basis. By combining these practices, we ensure efficient collaboration, rapid integration, and frequent delivery of new features to our users."
            sx={{ textAlign: 'center' }}
          />
        </Box>
        <Box data-aos="zoom-out" data-aos-duration="1000">
          <Image
            src={TrunkBasedImage}
            alt={'trunk based development'}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      </Container>
    </Box>
  );
};
