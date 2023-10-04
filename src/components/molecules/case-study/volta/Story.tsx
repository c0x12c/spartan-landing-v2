import * as React from 'react';
import { Box } from '@mui/material';
import { base } from '@/styles/colors';
import { BodyText, Container, Title } from '@/components/atoms';
interface IVoltaStoryProps {}

export const VoltaStory: React.FunctionComponent<IVoltaStoryProps> = () => {
  return (
    <Box py={{ xs: '40px', md: '80px' }}>
      <Container>
        <Box
          maxWidth="766px"
          mx="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          gap="32px"
        >
          <Title
            text="The Story"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ color: base.black }}
          />
          <BodyText
            sx={{ color: base.grey }}
            text="Volta approached us with an idea to create a unique crypto wallet application that would
            offer all the regular wallet functionality as well as some other interesting features
            like skinning. Our task was to define the architecture and build everything from
            scratch: iOS, Android native applications, and the backend platform and infrastructure."
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </Box>
      </Container>
    </Box>
  );
};
