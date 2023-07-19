import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ServiceType } from '@/constants/services';
import { base, gray, primary } from '@/styles/colors';
import Link from 'next/link';

type ServiceDetailType = ServiceType['detail'];
interface ICardService {
  title?: string;
  serviceDetail: ServiceDetailType;
  href: string;
}

export const CardService: React.FunctionComponent<ICardService> = ({
  title,
  serviceDetail,
  href,
  ...props
}) => {
  const renderServiceDetail = serviceDetail.map((item, index) => {
    return (
      <Box
        key={item.id}
        display="flex"
        flexDirection="column"
        gap="6px"
        borderBottom="1px solid"
        borderColor={index === serviceDetail.length - 1 ? 'transparent' : gray[300]}
      >
        <Typography variant="fs16" fontWeight={600} color={base.black}>
          {item.name}
        </Typography>
        <Typography
          variant="fs14"
          letterSpacing="0.21px"
          color={base.black}
          component="p"
          pb="16px"
        >
          {item.content}
        </Typography>
      </Box>
    );
  });
  return (
    <Box
      component={Link}
      bgcolor={base.white}
      p="20px"
      display="flex"
      flexDirection="column"
      gap="28px"
      borderRadius="8px"
      minHeight="350px"
      href={href}
      {...props}
    >
      <Box p="12px" borderRadius="6px" bgcolor={base.blue} textAlign="center">
        <Typography variant="fs20" fontWeight={600} color={primary[400]}>
          {title}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        {renderServiceDetail}
      </Box>
    </Box>
  );
};
