import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@/components/atoms/Container';
interface IVoltaStoryProps {}

const VoltaStory: React.FunctionComponent<IVoltaStoryProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mb="44px" py="80px">
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
            variant={matchesDesktop ? 'fs100' : matchesMobile ? 'fs40' : 'fs80'}
            color={colors.base.black}
            component="h2"
            mb="32px"
          >
            The Story
          </Typography>
          <Typography
            variant={matchesMobile ? 'fs16' : 'fs18'}
            color={colors.base.grey}
            letterSpacing="0.01em"
          >
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

export default VoltaStory;
