import * as React from 'react';
import { ProcessType } from '@/constants';
import { base, primary } from '@/styles/colors';
import { Box, Typography } from '@mui/material';

interface IProcessListProps {
  data: ProcessType[];
}

export const ProcessList: React.FunctionComponent<IProcessListProps> = ({ data }) => {
  const renderData = data.map((item, index) => {
    return (
      <ProcessListItem
        key={item.id}
        number={index + 1}
        {...item}
        isLast={index === data.length - 1}
      />
    );
  });
  return (
    <Box data-aos-delay="400" data-aos="flip-up">
      {renderData}
    </Box>
  );
};

const ProcessListItem = ({
  number,
  title,
  content,
  isLast,
}: {
  number: number;
  title: string;
  content: string;
  isLast?: boolean;
}) => {
  return (
    <Box position="relative" p={{ xs: 0, lg: '0 16px' }} pb="40px !important">
      <Box
        display="flex"
        p={{ xs: 0, lg: '0 16px' }}
        sx={{
          ':before': {
            content: "''",
            position: 'absolute',
            left: { xs: '20px', lg: '51px' },
            top: 0,
            bottom: 0,
            width: '2px',
            borderStyle: 'dashed',
            borderColor: primary[500],
            borderWidth: isLast ? 0 : '0 0 0 2px',
          },
        }}
      >
        <Typography
          variant="fs18"
          fontWeight={600}
          minWidth={'40px'}
          bgcolor={primary[500]}
          component={'p'}
          height={'40px'}
          color={base.white}
          borderRadius={'40px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mr={'20px'}
          zIndex={1}
        >
          {number < 10 ? `0${number}` : number}
        </Typography>
        <Box>
          <Typography
            variant="fs18"
            color={base.black}
            mb={'18px'}
            component={'h4'}
            fontWeight={600}
            height="40px"
            display="flex"
            alignItems="center"
            sx={{
              mb: '12px',
            }}
          >
            {title}
          </Typography>
          <Typography variant="fs18" component={'p'}>
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
