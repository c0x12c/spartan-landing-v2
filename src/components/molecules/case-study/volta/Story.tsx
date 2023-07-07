import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { base } from '@/styles/colors';
import { Container } from '@/components/atoms';
interface IVoltaStoryProps {}

export const VoltaStory: React.FunctionComponent<IVoltaStoryProps> = () => {
  return (
    <Box py="80px">
      <Container>
        <Box
          maxWidth="766px"
          mx="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Typography
            variant="fs64"
            color={base.black}
            data-aos="fade-up"
            data-aos-delay="200"
            component="h2"
            mb="32px"
          >
            The Story
          </Typography>
          <Typography variant={'fs18'} color={base.grey} data-aos="fade-up" data-aos-delay="300">
            Volta approached us with an idea to create a unique crypto wallet application that would
            offer all the regular wallet functionality as well as some other interesting features
            like skinning. And our task was to define the architecture and building everything from
            scratch: iOS, Android native applications + the backend platform and infrastructure.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
