import { base } from '@/styles/colors';
import { Box } from '@mui/material';
import * as React from 'react';

interface IQuoteTagProps {
  text: string;
}

const QuoteTag: React.FunctionComponent<IQuoteTagProps> = ({ text }) => {
  return (
    <Box
      p="8px 16px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="8px"
      border="1px solid"
      borderColor={'rgba(0, 0, 0, 0.30)'}
      textTransform="capitalize"
      fontSize={'14px'}
      color={base.black}
    >
      {text}
    </Box>
  );
};

export default QuoteTag;
