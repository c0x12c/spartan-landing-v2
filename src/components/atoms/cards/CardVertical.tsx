import { base, gray, primary } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ArrowIcon } from '../icons/Arrow';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface CardVerticalProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

export const CardVertical: React.FC<CardVerticalProps> = ({ icon, title, description, link }) => {
  const router = useRouter();
  const goToPath = () => {
    if (!link) return;
    router.push(link);
  };

  const isMobile = useBreakpoint(BreakPoints.MD);

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
      p={{ xs: '16px', sm: '20px' }}
      borderRadius={'8px'}
      minHeight={isMobile ? '230px' : '295px'}
      onClick={goToPath}
      sx={{
        cursor: link ? 'pointer' : 'default',
        ':hover': {
          boxShadow: `0px 10px 47px 0px ${gray[75]}`,
          '& .title': {
            color: primary[500],
            transition: 'color 0.3s ease',
          },
          '& .button-link': {
            color: primary[500],
            transition: 'color 0.3s ease',
          },
          '& .arrow-icon path': {
            stroke: primary[500],
            transition: 'stroke 0.3s ease',
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
      <Typography
        variant={isMobile ? 'fs16' : 'fs18'}
        color={gray[900]}
        fontWeight={600}
        className="title"
      >
        {title}
      </Typography>
      <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[600]}>
        {description}
      </Typography>
      {link && (
        <Box display="flex" alignItems="center" gap="6px" color={gray[600]} className="button-link">
          <Typography variant="fs16" fontWeight={600}>
            Learn More
          </Typography>
          <ArrowIcon color={gray[600]} />
        </Box>
      )}
    </Box>
  );
};
