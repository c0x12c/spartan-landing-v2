import * as React from 'react';
import { base, gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { AttachIcon, BodyText } from '@/components/atoms';

interface IUploadFileProps {
  title: string;
  isRequired?: boolean;
  text: string;
  helpText: string;
}

export const UploadFile: React.FunctionComponent<IUploadFileProps> = ({
  text,
  helpText,
  title,
  isRequired = false,
}) => {
  return (
    <Box>
      <Typography variant="fs14" color={gray[600]}>
        {title}{' '}
        {isRequired && (
          <Typography variant="fs14" color={base.orange}>
            *
          </Typography>
        )}
      </Typography>
      <Box display="flex" flexDirection="column" gap="15px">
        <Box
          borderRadius="8px"
          border="1px solid #DCE4E8"
          bgcolor={gray[100]}
          position="relative"
          maxWidth="243px"
          p="17px 24px"
          display="flex"
          alignItems="center"
          gap="12px"
        >
          <AttachIcon />
          <BodyText text={text} sx={{ color: base.black }} />
          <input
            type="file"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              opacity: 0,
            }}
          />
        </Box>
        <BodyText text={helpText} sx={{ letterSpacing: '0.32px', color: gray[700] }} />
      </Box>
    </Box>
  );
};
