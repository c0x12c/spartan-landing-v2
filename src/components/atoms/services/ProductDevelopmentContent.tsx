import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const ProductDevelopmentContent = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 'text-1',
      text: 'Our cutting-edge product development services help you bring your product vision to life and deliver highly productive outcomes.',
    },
    {
      id: 'text-2',
      text: 'Collaborate closely with our team of experts to ensure your product exceeds customer expectations.',
    },
    {
      id: 'text-3',
      text: 'Leverage our agile development approach for quick time-to-market and the flexibility to adapt to changing requirements.',
    },
    {
      id: 'text-4',
      text: 'Benefit from our expertise in software development and user-centered design to create innovative and user-friendly products.',
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
    <Box id="product-development">
      <Typography
        variant={matchesMobile ? 'fs26' : 'fs40'}
        color={colors.primary[500]}
        letterSpacing="-0.035em"
        mb="32px"
        component="h2"
      >
        Product Development
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

export default ProductDevelopmentContent;
