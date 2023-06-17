/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as colors from '@/styles/colors';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

interface IAccordionImageItemProps {
  index: number;
  title: string;
  content: string;
  imgSrc: any;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  borderBottom: `1px solid`,
  borderColor: colors.gray[700],
  '&.Mui-expanded': {
    borderColor: 'transparent',
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(() => ({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: '33px',
  paddingBottom: '40px',
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
  '&.MuiAccordionSummary-root': {
    borderColor: 'transparent !important',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

const AccordionImageItem: React.FunctionComponent<IAccordionImageItemProps> = ({
  index,
  title,
  content,
  imgSrc,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Accordion expanded={expanded} onChange={handleChange} sx={{ position: 'relative' }}>
      <AccordionSummary aria-controls="panel-content">
        <Grid container>
          <Grid item xs={1.5}>
            <Typography
              variant={matches ? 'fs24' : 'fs27'}
              letterSpacing="-0.54px"
              color={colors.gray[400]}
              lineHeight={1.6}
            >
              {index < 10 ? `0${index}` : index}/
            </Typography>
          </Grid>
          <Grid item xs={10.5}>
            <Typography
              variant={matches ? 'fs30' : 'fs54'}
              letterSpacing="0.01em"
              color={expanded ? colors.primary[500] : colors.gray[800]}
              sx={{ transition: 'color .2s' }}
              maxWidth={expanded ? '487px' : '100%'}
              display="block"
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={1.5}></Grid>
          <Grid
            item
            xs={10.5}
            display={matchesMobile ? 'block' : 'flex'}
            justifyContent="space-between"
            alignItems="flex-start"
            gap="16px"
          >
            <Typography
              variant="fs16"
              color={colors.gray[500]}
              mb="18px"
              display="block"
              maxWidth={expanded ? '487px' : '100%'}
            >
              {content}
            </Typography>
            {matches && (
              <Image
                src={imgSrc}
                alt="imgSrc"
                style={{ maxWidth: matchesMobile ? '100%' : '50%', height: 'auto' }}
              />
            )}
          </Grid>
        </Grid>
      </AccordionDetails>
      {!matches && expanded && (
        <Box position="absolute" right="0" top="33px">
          <Image src={imgSrc} alt="imgSrc" />
        </Box>
      )}
    </Accordion>
  );
};

export default AccordionImageItem;
