import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const QAContent = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 'text-1',
      text: 'Ensure the quality and reliability of your mobile and web applications with our trusted QA and testing services.',
    },
    {
      id: 'text-2',
      text: 'Rigorous testing methodologies and comprehensive test coverage to identify bugs and ensure optimal performance.',
    },
    {
      id: 'text-3',
      text: 'Leverage our expertise in test automation to reduce testing time and improve efficiency.',
    },
    {
      id: 'text-4',
      text: 'Deliver high-quality software that meets the highest standards of reliability and user satisfaction.',
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
    <Box id="qa-testing">
      <Typography
        variant={matchesMobile ? 'fs26' : 'fs40'}
        color={colors.primary[500]}
        letterSpacing="-0.035em"
        mb="32px"
        component="h2"
      >
        QA and Testing
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

export default QAContent;
