import * as React from 'react';
import { ProcessType } from '@/constants';
import { base, primary } from '@/styles/colors';
import { Box, Typography } from '@mui/material';

interface IProcessListProps {
  data: ProcessType[];
}

export const ProcessList: React.FunctionComponent<IProcessListProps> = ({ data }) => {
  const renderData = data.map((item, index) => {
    let color;
    switch (index) {
      case 0:
        color = primary[400];
        break;
      case 1:
        color = base.orange;
        break;
      case 2:
        color = base.green;
        break;
      case 3:
        color = base.yellow;
        break;
      default:
        color = primary[500];
        break;
    }

    return (
      <ProcessListItem
        key={item.id}
        number={index + 1}
        color={color}
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
  color,
}: {
  number: number;
  title: string;
  content: string;
  isLast?: boolean;
  color: string;
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
            borderColor: primary[400],
            borderWidth: isLast ? 0 : '0 0 0 2px',
          },
        }}
      >
        <Typography
          variant="fs18"
          fontWeight={600}
          minWidth={'40px'}
          bgcolor={color} // Використовуйте заданий колір для фону значка
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
