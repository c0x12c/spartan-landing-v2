import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const AIContent = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 'text-1',
      text: 'Harness the power of artificial intelligence with our leading AI development services.',
    },
    {
      id: 'text-2',
      text: 'Leverage our proven expertise and track record in delivering reliable and innovative AI solutions.',
    },
    {
      id: 'text-3',
      text: 'Unlock valuable insights from your data using machine learning algorithms, natural language processing, and more.',
    },
    {
      id: 'text-4',
      text: 'Drive innovation within your organization and gain a competitive advantage in the market with AI-powered solutions.',
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
    <Box id="artificial-intelligence">
      <Typography
        variant={matchesMobile ? 'fs26' : 'fs40'}
        color={colors.primary[500]}
        letterSpacing="-0.035em"
        mb="32px"
        component="h2"
      >
        AI Development
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

export default AIContent;
