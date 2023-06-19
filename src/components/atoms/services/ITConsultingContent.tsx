import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import placeholder from '@/assets/images/services/placeholder.svg';

const ITConsultingContent = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box>
      <Typography
        variant={matchesMobile ? 'fs26' : 'fs40'}
        color={colors.primary[500]}
        letterSpacing="-0.035em"
        mb="32px"
        component="h2"
      >
        IT Consulting
      </Typography>
      <Typography variant={'fs18'} color={colors.gray[600]} mb="24px" component="p">
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries
      </Typography>
      <Typography variant={'fs18'} color={colors.gray[600]} mb="24px" component="p">
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries
      </Typography>
      <Image src={placeholder} alt="placeholder" style={{ maxWidth: '100%', height: 'auto' }} />
    </Box>
  );
};

export default ITConsultingContent;
