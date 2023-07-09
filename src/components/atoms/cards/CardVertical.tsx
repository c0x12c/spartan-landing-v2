import { base, gray, primary } from '@/styles/colors';
import { Box, Typography } from '@mui/material';

interface CardVerticalProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const CardVertical: React.FC<CardVerticalProps> = ({ icon, title, description }) => {
  return (
    <Box
      data-aos="flip-up"
      data-aos-delay="700"
      display="flex"
      alignItems="start"
      gap={'20px'}
      flexDirection={'column'}
      bgcolor={base.white}
      boxShadow={'none'}
      p={'20px'}
      borderRadius={'8px'}
      sx={{
        ':hover': {
          boxShadow: `0px 10px 47px 0px ${gray[75]}`,
          '& .title': {
            color: primary[500],
            transition: 'color 0.3s ease',
          },
          transition: 'box-shadow 0.3s ease',
        },
      }}
    >
      <Box
        p={'15px'}
        borderRadius="50%"
        bgcolor={base.white}
        boxShadow={`1px 1px 20px 0px ${gray[15]}`}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {icon}
      </Box>
      <Typography variant="fs18" color={gray[900]} fontWeight={600} className="title">
        {title}
      </Typography>
      <Typography variant="fs16" color={gray[600]}>
        {description}
      </Typography>
    </Box>
  );
};
