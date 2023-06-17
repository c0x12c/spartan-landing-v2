/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface ITeamMemberProps {
  name: string;
  imgSrc: any;
  position: string;
}

const TeamMember: React.FunctionComponent<ITeamMemberProps> = ({ name, imgSrc, position }) => {
  return (
    <Box width="415px">
      <Image src={imgSrc} alt="photo" width={415} />
      <Box pt="24px" pb="10px" borderBottom="1px solid" borderColor={colors.gray[500]}>
        <Typography variant="fs32" color={colors.base.black}>
          {name}
        </Typography>
      </Box>
      <Typography mt="10px" variant="fs16" color={colors.base.grey} display="block">
        {position}
      </Typography>
    </Box>
  );
};

export default TeamMember;
