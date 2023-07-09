import * as React from 'react';
import { Container, SubTitle, Title } from '@/components/atoms';
import { ServiceChooseUsContent, ServicesEnum } from '@/constants';
import { gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import checkIcon from '@/assets/images/icons/check.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IChooseUsProps {
  tag: ServicesEnum;
}

export const ChooseUs: React.FunctionComponent<IChooseUsProps> = ({ tag }) => {
  const { title, content, imgSrc } = ServiceChooseUsContent.filter((item) => item.type === tag)[0];
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderContent = content.map((item) => {
    return (
      <Box display="flex" alignItems="center" gap="12px" key={item.id}>
        <Image src={checkIcon} alt="checkIcon" style={{ maxWidth: '100%', height: 'auto' }} />
        <Typography variant="fs16" color={gray[800]} component="p">
          {item.description}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      py={isTablet ? '60px' : '120px'}
      sx={{
        backgroundImage: isTablet ? 'none' : `url(${imgSrc.src})`,
        backgroundSize: '40%',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Box display="flex" flexDirection={isTablet ? 'column' : 'row'} gap="44px">
          <Box display="flex" flexDirection="column" gap="24px" mb="64px" maxWidth="614px">
            <SubTitle text="Why choose us" data-aos="fade-up" data-aos-delay="200" />
            <Title text={title} data-aos="fade-up" data-aos-delay="300" />
            <Box display="flex" flexDirection="column" gap="32px">
              {renderContent}
            </Box>
          </Box>
          {isTablet && (
            <Box display="flex" justifyContent="flex-end">
              <Image src={imgSrc} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
