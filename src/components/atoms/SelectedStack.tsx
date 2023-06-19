import * as React from 'react';
import * as colors from '@/styles/colors';

import { StackType, Stacks } from '@/constants/stacks';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ISelectedStackProps {
  id: string;
}

const SelectedStack: React.FunctionComponent<ISelectedStackProps> = ({ id }) => {
  const selectedStackContent = Stacks.find((stack) => stack.id === id) as StackType;

  const renderContent = selectedStackContent.content.map((stackContent) => {
    return (
      <Box mb="32px" key={stackContent.id}>
        <Typography
          variant="fs48"
          letterSpacing="-0.96px"
          mb="18px"
          color={colors.base.black}
          display="block"
        >
          {stackContent.label}
        </Typography>
        <Box display="flex" flexWrap="wrap" rowGap="18px" columnGap="17px">
          {stackContent.tech.map((tech) => {
            return (
              <Box
                key={tech.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="6px 22px"
                bgcolor={colors.gray[200]}
                borderRadius="6px"
                minWidth="222px"
              >
                <Image src={tech.imgSrc} alt={tech.name} />
                <Typography
                  fontSize="13px"
                  color={colors.base.black}
                  fontWeight={600}
                  lineHeight={1.2}
                >
                  {tech.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  });

  return <React.Fragment>{renderContent}</React.Fragment>;
};

export default SelectedStack;
