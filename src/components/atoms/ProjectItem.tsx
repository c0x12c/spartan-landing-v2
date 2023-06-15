import * as React from 'react';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import nukey from '@/assets/images/nukey.svg';
import outerLink from '@/assets/images/outer-link-black.svg';

import { Box, Button, Typography } from '@mui/material';

interface IProjectItemProps {}

const ProjectItem: React.FunctionComponent<IProjectItemProps> = (props) => {
  return (
    <React.Fragment>
      <Box width="502px">
        <Image src={nukey} alt="nukey" width="502" />
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Button
            sx={{
              mt: '24px',
              mb: '18px',
              p: '10px 23px',
              border: '1px solid',
              borderColor: colors.primary[700],
              color: colors.primary[700],
              borderRadius: '40px',
            }}
          >
            NFT market
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="fs32" color={colors.base.black} letterSpacing="0.01em">
            Nukey project
          </Typography>
          <Image src={outerLink} alt="outerLink" />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProjectItem;
