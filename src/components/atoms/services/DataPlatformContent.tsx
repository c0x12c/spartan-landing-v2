import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const DataPlatformContent = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 'text-1',
      text: 'Our comprehensive data platform solutions cover the entire data lifecycle, from design to advanced analytics.',
    },
    {
      id: 'text-2',
      text: 'Design and implement robust data architectures that ensure data quality, reliability, and accessibility.',
    },
    {
      id: 'text-3',
      text: 'Leverage advanced analytics capabilities such as predictive modeling and data mining to gain actionable insights.',
    },
    {
      id: 'text-4',
      text: 'Make informed decisions and drive business growth with our end-to-end data platform solutions.',
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
    <Box id="data-platform">
      <Typography
        variant={matchesMobile ? 'fs26' : 'fs40'}
        color={colors.primary[500]}
        letterSpacing="-0.035em"
        mb="32px"
        component="h2"
      >
        Data Platform Solutions
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

export default DataPlatformContent;
