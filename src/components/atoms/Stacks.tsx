import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box, Typography } from '@mui/material';
import { FieldType } from '@/constants/stacks';
import { base, gray, primary } from '@/styles/colors';
import Image from 'next/image';

interface IStacksProps {
  data: FieldType[];
}

export const Stacks: React.FunctionComponent<IStacksProps> = ({ data }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const [selectedField, setSelectedField] = React.useState(data[0]);
  const renderFields = data.map((item) => {
    return (
      <Box
        key={item.id}
        p="10px 14px"
        borderRadius="100px"
        border="1px solid"
        borderColor={gray[200]}
        color={selectedField.id === item.id ? base.white : base.black}
        bgcolor={selectedField.id === item.id ? primary[400] : base.white}
        onClick={() => setSelectedField(item)}
        sx={{
          cursor: 'pointer',
          transition: 'all 0.4s',
        }}
      >
        {item.name}
      </Box>
    );
  });

  const renderFieldContent = selectedField.stacks.map((item) => {
    return (
      <Box
        key={item.id}
        p="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="14px"
        border="1px solid"
        borderColor={gray[200]}
        width="128px"
        height="128px"
        borderRadius="8px"
      >
        <Image src={item.imgSrc} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
        <Typography
          variant="fs14"
          color={base.black}
          sx={{
            letterSpacing: '0.28px',
            textAlign: 'center',
          }}
        >
          {item.name}
        </Typography>
      </Box>
    );
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={isMobile ? '24px' : '44px'}>
      <Box display="flex" alignItems="center" gap="12px" flexWrap="wrap">
        {renderFields}
      </Box>
      <Box
        width="100%"
        maxWidth="1170px"
        mx="auto"
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        gap="20px"
      >
        {renderFieldContent}
      </Box>
    </Box>
  );
};