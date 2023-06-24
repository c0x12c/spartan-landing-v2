import * as React from 'react';
import * as colors from '@/styles/colors';
import { Grid, Typography } from '@mui/material';

interface IServiceTagProps {
  index: number;
  isActive: boolean;
  label: string;
  hash: string;
  onClick: (hash: string) => void;
}

const ServiceTag: React.FunctionComponent<IServiceTagProps> = ({
  index,
  isActive,
  label,
  hash,
  onClick,
}) => {
  return (
    <React.Fragment>
      <Grid container onClick={() => onClick(hash)} sx={{ cursor: 'pointer' }} p="6.5px 0">
        <Grid item xs={1.5}>
          <Typography
            variant={'fs18'}
            letterSpacing="-0.54px"
            color={isActive ? colors.primary[500] : colors.gray[300]}
            fontWeight="700"
          >
            {index < 10 ? `0${index}` : index}/
          </Typography>
        </Grid>
        <Grid item xs={10.5}>
          <Typography
            variant={'fs18'}
            color={isActive ? colors.primary[500] : colors.gray[500]}
            fontWeight="700"
          >
            {label}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ServiceTag;
