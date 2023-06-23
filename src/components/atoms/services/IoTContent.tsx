import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const IoTContent = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 'text-1',
      text: 'Unlock the potential of the Internet of Things with our reliable and cost-effective IoT development solutions.',
    },
    {
      id: 'text-2',
      text: 'Design, develop, and deploy IoT solutions tailored to your specific requirements.',
    },
    {
      id: 'text-3',
      text: 'Benefit from our extensive experience in IoT technologies and industry best practices.',
    },
    {
      id: 'text-4',
      text: 'Improve operational efficiency and discover new business opportunities with our reliable IoT solutions.',
    },
  ];

  const renderData = data.map((item) => {
    return (
      <Box
        component="li"
        key={item.id}
        position="relative"
        sx={{
          '&:before': {
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            content: '"• "',
            color: colors.gray[600],
            fontWeight: 'bold',
            display: 'inline-block',
            width: '8px',
          },
        }}
      >
        <Typography
          variant="fs18"
          color={colors.gray[600]}
          letterSpacing="0.18px"
          component="p"
          display="inline-block"
          marginLeft="20px"
        >
          {item.text}
        </Typography>
      </Box>
    );
  });

  return (
    <Box id="it-consulting">
      <Typography
        variant={matchesMobile ? 'fs26' : 'fs40'}
        color={colors.primary[500]}
        letterSpacing="-0.035em"
        mb="32px"
        component="h2"
      >
        IoT Development
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap="8px"
        component={'ul'}
        sx={{ listStyle: 'none' }}
      >
        {renderData}
      </Box>
    </Box>
  );
};

export default IoTContent;
