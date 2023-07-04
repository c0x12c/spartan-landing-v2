import { Container, SubTitle, Title } from '@/components/atoms';
import { base, gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Chan from '@/assets/images/about-us/chan.jpg';
import Bao from '@/assets/images/about-us/bao.jpg';
import Duc from '@/assets/images/about-us/duc.jpg';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import TwitterIcon from '@/assets/images/socials/twitter.svg';
import InstagramIcon from '@/assets/images/socials/instagram.svg';
import LinkedinIcon from '@/assets/images/socials/linkedin.svg';
import FacebookIcon from '@/assets/images/socials/facebook.svg';
import Link from 'next/link';

interface FounderCardProps {
  founder: Founder;
}

export const Founders = () => {
  return (
    <Box p={'100px 0'} bgcolor={gray[100]}>
      <Container>
        <Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            width={'100%'}
            alignItems={{ md: 'flex-end', xs: 'center' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            mb={'64px'}
          >
            <Box width={{ md: '450px', xs: '100%' }} mb={{ xs: '24px', md: 0 }}>
              <SubTitle
                text="Board of leading"
                mb={'24px'}
                textAlign={{ xs: 'center', md: 'start' }}
                data-aos-delay="200"
                data-aos="fade-up"
              />
              <Title
                text="Our elite founding team of Engineers"
                textAlign={{ xs: 'center', md: 'start' }}
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Box>
            <Typography
              variant="fs18"
              color={gray[600]}
              width={{ md: '435px', xs: '100%' }}
              textAlign={{ xs: 'center', md: 'start' }}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              With a diverse range of expertise and a shared passion for innovation, we work
              together seamlessly to bring your ideas to life. Join us on this journey of success
              and let our team be your catalyst for growth.
            </Typography>
          </Box>
          <Box display={'flex'} gap={'55px'} flexDirection={{ md: 'row', xs: 'column' }}>
            <FounderCard founder={{ image: Chan, name: 'Chan Nguyen', position: 'CEO' }} />
            <FounderCard founder={{ image: Bao, name: 'Bao Nguyen', position: 'CTO' }} />
            <FounderCard founder={{ image: Duc, name: 'Duc Duong', position: 'COO' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

type Founder = {
  image: StaticImageData;
  name: string;
  position: string;
};

interface FounderCardProps {
  founder: Founder;
}

const FounderCard: React.FC<FounderCardProps> = ({ founder }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      width={{ md: 'calc((100% - 55px * 3)/2)', xs: '100%' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
      }}
    >
      <Box position="relative" data-aos="flip-right" data-aos-delay="800">
        <Image src={founder.image} alt={founder.name} style={{ width: '100%', height: 'auto' }} />
        {isHovered && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            width="100%"
            p={'24px'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              bgColor: 'gba(255, 255, 255, 0.30)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Box display="flex" gap={2}>
              <Link
                href={'https://www.facebook.com'}
                style={{
                  width: '45px',
                  height: '45px',
                  border: `1px solid ${base.white}`,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src={FacebookIcon} alt="Facebook" />
              </Link>
              <Link
                href={'https://www.facebook.com'}
                style={{
                  width: '45px',
                  height: '45px',
                  border: `1px solid ${base.white}`,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src={InstagramIcon} alt="Instagram" style={{ width: '24px' }} />
              </Link>
              <Link
                href={'https://www.facebook.com'}
                style={{
                  width: '45px',
                  height: '45px',
                  border: `1px solid ${base.white}`,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src={TwitterIcon} alt="Twitter" style={{ width: '20px' }} />
              </Link>
              <Link
                href={'https://www.facebook.com'}
                style={{
                  width: '45px',
                  height: '45px',
                  border: `1px solid ${base.white}`,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src={LinkedinIcon} alt="Linkedin" style={{ width: '24px' }} />
              </Link>
            </Box>
          </Box>
        )}
      </Box>

      <Box mt={2}>
        <Typography
          variant="fs24"
          component="p"
          pb={1}
          borderBottom={`1px solid ${gray[300]}`}
          mb={1}
          color={gray[850]}
          textAlign={{ xs: 'center', md: 'start' }}
        >
          {founder.name}
        </Typography>
        <Typography
          variant="fs14"
          component="p"
          color={base.grey}
          textAlign={{ xs: 'center', md: 'start' }}
        >
          {founder.position}
        </Typography>
      </Box>
    </Box>
  );
};
