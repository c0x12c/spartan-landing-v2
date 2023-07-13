import * as React from 'react';
import { base, gray, primary } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { BodyText, Container, SubTitle, Title } from '@/components/atoms';
import { Fields } from '@/constants';
import Image from 'next/image';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ITechStacksProps {}

export const TechStacks: React.FunctionComponent<ITechStacksProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const [selectedField, setSelectedField] = React.useState(Fields[0]);
  // const renderFields = Fields.map((item) => {
  //   return (
  //     <Box
  //       key={item.id}
  //       p="2px 24px"
  //       borderRadius="16px"
  //       color={selectedField.id === item.id ? base.white : gray[600]}
  //       bgcolor={selectedField.id === item.id ? primary[500] : base.white}
  //       onClick={() => setSelectedField(item)}
  //       sx={{
  //         cursor: 'pointer',
  //         transition: 'all 0.4s',
  //       }}
  //     >
  //       {item.name}
  //     </Box>
  //   );
  // });

  // const renderFieldContent = selectedField.stacks.map((item) => {
  //   return (
  //     <Box key={item.id}>
  //       <Image src={item.imgSrc} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
  //     </Box>
  //   );
  // });
  return (
    <Box py={isMobile ? '40px' : '120px'}>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems="center"
          gap={'24px'}
          mb={isMobile ? '24px' : '64px'}
          maxWidth={800}
          mx="auto"
          textAlign="center"
        >
          <SubTitle text="Our services" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Technology Stack" data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text="At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables us
            to deliver innovative solutions and drive operational efficiency. Our tech stack is
            constantly evolving, staying up to date with the latest industry trends and best
            practices."
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={isMobile ? '24px' : '44px'}
        >
          <Box
            display="flex"
            alignItems="center"
            gap="16px"
            borderRadius="34px"
            border="1px solid"
            p="6px"
            flexWrap="wrap"
            borderColor={gray[200]}
          >
            {/* {renderFields} */}
          </Box>
          <Box
            width="100%"
            maxWidth="950px"
            mx="auto"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="center"
            gap="64px"
          >
            {/* {renderFieldContent} */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
