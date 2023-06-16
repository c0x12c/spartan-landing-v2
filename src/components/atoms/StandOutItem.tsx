import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';

interface IStandOutItemProps {
  index: number;
  textTag: string;
  title: string;
  content: string;
}

const StandOutItem: React.FunctionComponent<IStandOutItemProps> = ({
  index,
  textTag,
  title,
  content,
}) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Box>
        <Box textAlign="center" borderBottom="5px solid" borderColor={colors.primary[500]}>
          <Typography
            variant={matchesMobile ? 'fs30' : 'fs54'}
            color={colors.gray[800]}
            mb="32px"
            component="h2"
          >
            0{index}
          </Typography>
        </Box>
        <Box
          bgcolor={matchesTablet ? colors.base.white : 'transparent'}
          px={matchesTablet ? '40px' : 0}
          pt={matchesDesktop ? '24px' : '40px'}
          pb={matchesTablet ? '40px' : 0}
        >
          <Box display="flex" gap="12px" pb="14px">
            <Button
              sx={{
                p: '10px 43.5px',
                border: '1px solid',
                borderColor: colors.primary[700],
                color: colors.primary[700],
                borderRadius: '40px',
                letterSpacing: '-0.13px',
              }}
            >
              {textTag}
            </Button>
          </Box>
          <Box>
            <Typography
              variant="fs32"
              color={colors.gray[800]}
              letterSpacing="0.01em"
              mb="14px"
              component="h3"
            >
              {title}
            </Typography>
            <Typography variant="fs16" color={colors.gray[500]} letterSpacing="0.01em">
              {content}
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default StandOutItem;
