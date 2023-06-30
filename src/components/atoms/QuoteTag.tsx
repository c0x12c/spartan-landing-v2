import { Box } from '@mui/material';
import * as React from 'react';

interface IQuoteTagProps {
  text: string;
}

const QuoteTag: React.FunctionComponent<IQuoteTagProps> = ({ text }) => {
  return (
    <Box
      p="8px 55px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="24px"
      borderRadius="100px"
      bgcolor={'rgba(89, 89, 89, 0.33)'}
      textTransform="uppercase"
    >
      {text}
    </Box>
  );
};

export default QuoteTag;
