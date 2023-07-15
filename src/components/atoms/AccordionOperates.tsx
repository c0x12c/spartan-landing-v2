import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { OperatesProcessType, OperatesProcesses } from '@/constants';
import { Box } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base, gray } from '@/styles/colors';
import { BodyText } from './typography/BodyText';
import Image from 'next/image';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  border: `1px solid #E6E6E6`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({}) => ({}));

export const AccordionOperates = () => {
  const [expanded, setExpanded] = React.useState<string | false>(OperatesProcesses[0].id);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const isMobile = useBreakpoint(BreakPoints.MD);
  const selectedOperateItem = OperatesProcesses.find(
    (item) => item.id === expanded
  ) as OperatesProcessType;

  const renderAccordion = OperatesProcesses.map((item, index) => {
    const p = isMobile ? '16px' : '40px';

    return (
      <Accordion
        key={item.id}
        expanded={expanded === item.id}
        onChange={handleChange(item.id)}
        sx={{
          bgcolor: expanded === item.id ? item.bgColor : base.white,
        }}
      >
        <AccordionSummary
          aria-controls={`${item.id}-content`}
          id={`${item.id}-header`}
          sx={{
            p: expanded === item.id ? `${p} ${p} 0 ${p}` : p,
          }}
        >
          <Typography variant={isMobile ? 'fs18' : 'fs24'} fontWeight={600} color={base.black}>
            {index + 1}. {item.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p: expanded === item.id ? (isMobile ? `0 ${p}` : `0 ${p} ${p} ${p}`) : p,
          }}
        >
          <BodyText text={item.description} sx={{ color: gray[700] }} />
          {isMobile && (
            <Box
              width={'calc(100% + 32px)'}
              bgcolor={selectedOperateItem.sideBgColor}
              pt="35px"
              pl="35px"
              mt="16px"
              mx="-16px"
            >
              <Image
                src={selectedOperateItem.imgSrc}
                alt={selectedOperateItem.title}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      flexWrap="wrap"
      overflow="hidden"
      borderRadius="8px"
    >
      <Box maxWidth={isMobile ? '100%' : '477px'} flex="1">
        {renderAccordion}
      </Box>
      {!isMobile && (
        <Box
          width={isMobile ? '100%' : 'calc(100% - 477px)'}
          bgcolor={selectedOperateItem.sideBgColor}
          pt={'53px'}
          pl="53px"
        >
          <Image
            src={selectedOperateItem.imgSrc}
            alt={selectedOperateItem.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>
      )}
    </Box>
  );
};
