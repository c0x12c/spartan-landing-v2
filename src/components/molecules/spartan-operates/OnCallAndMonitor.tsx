import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box } from '@mui/material';
import { base } from '@/styles/colors';
import { BodyText, Container, Title } from '@/components/atoms';
import Image from 'next/image';
import OnCallImage from '@/assets/images/spartan-operates/on-call.webp';
import MonitorImage from '@/assets/images/spartan-operates/monitor.webp';

interface IOnCallAndMonitorProps {}

export const OnCallAndMonitor: React.FunctionComponent<IOnCallAndMonitorProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isMobile ? '40px' : '96px'}>
      <Container>
        <Box display="flex" flexDirection={'column'} gap={isMobile ? '80px' : '96px'}>
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            columnGap="64px"
            rowGap={isMobile ? '16px' : '24px'}
          >
            <Box width={isMobile ? '100%' : 'calc(100% - 437px)'}>
              <Image
                src={OnCallImage}
                alt={'on-call'}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
            <Box
              maxWidth={isMobile ? '100%' : '437px'}
              display="flex"
              flexDirection="column"
              gap={isMobile ? '16px' : '24px'}
              flex="1"
            >
              <Title text="On-call procedure" sx={{ color: base.black }} />
              <BodyText text="We use Opsgenie to streamline our on-call procedure. Opsgenie automatically alerts the designated on-call team member when an incident occurs, ensuring quick response. It facilitates communication and coordination during incident resolution, helping us address issues efficiently. With Opsgenie, we have the necessary tools to minimize system impact and maintain service availability. Our integration with Opsgenie enhances our on-call procedure and ensures effective incident management." />
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            columnGap="64px"
            rowGap={isMobile ? '16px' : '24px'}
          >
            <Box width={isMobile ? '100%' : 'calc(100% - 437px)'}>
              <Image
                src={MonitorImage}
                alt={'on-call'}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
            <Box
              maxWidth={isMobile ? '100%' : '437px'}
              display="flex"
              flexDirection="column"
              gap={isMobile ? '16px' : '24px'}
              flex="1"
            >
              <Title text="Monitoring with APM tool" sx={{ color: base.black }} />
              <BodyText text="We use an APM (Application Performance Monitoring) tool to monitor our systems. The APM tool allows us to track important metrics and logs in real-time. It provides a centralized dashboard where we can monitor things like CPU usage, memory utilization, and network traffic. The APM tool also sends alerts when predefined thresholds are exceeded, helping us address issues promptly. With its analytics and visualization features, we can analyze system behavior and make informed decisions. The APM tool plays a crucial role in ensuring the reliability and performance of our systems" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
