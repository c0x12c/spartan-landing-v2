import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography } from '@mui/material';

interface IStackTagProps {
  isActive: boolean;
  label: string;
  id: string;
  onClick: (id: string) => void;
}

const StackTag: React.FunctionComponent<IStackTagProps> = ({ isActive, label, id, onClick }) => {
  return (
    <React.Fragment>
      <Box
        py="4px"
        onClick={() => onClick(id)}
        display="flex"
        alignItems="center"
        sx={{ cursor: 'pointer' }}
      >
        <Box
          width="4px"
          height="32px"
          bgcolor={colors.primary[500]}
          sx={{ opacity: isActive ? 1 : 0, transition: 'opacity .2s' }}
        ></Box>
        <Typography
          variant={'fs18'}
          color={isActive ? colors.base.black : colors.gray[500]}
          paddingLeft={isActive ? '20px' : 0}
          fontWeight="700"
          sx={{ transition: 'all .2s' }}
        >
          {label}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default StackTag;
