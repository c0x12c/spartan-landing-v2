import * as React from 'react';
import * as colors from '@/styles/colors';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import expand from '@/assets/images/expand.svg';

interface IStyledAccordionItemProps {
  index: number;
  title: string;
  content: string;
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
  padding: 0,
  '&.MuiAccordionSummary-root': {
    borderColor: 'transparent !important',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({}) => ({
  padding: 0,
}));

const StyledAccordionItem: React.FunctionComponent<IStyledAccordionItemProps> = ({
  index,
  title,
  content,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary aria-controls="panel-content">
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Grid container maxWidth="calc(100% - 44px)" alignItems="center">
            <Grid item xs={matches ? 2 : 1.5}>
              <Box
                width="40.5px"
                height="40.5px"
                borderRadius="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor={colors.primary[500]}
              >
                <Typography
                  color={colors.base.white}
                  fontSize={matches ? '18px' : '22.736px'}
                  lineHeight={1.25}
                  letterSpacing={'0.01em'}
                  fontWeight={700}
                >
                  {index < 10 ? `0${index}` : index}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={matches ? 10 : 10.5}>
              <Typography
                variant={matches ? 'fs20' : 'fs32'}
                letterSpacing="-0.03em"
                color={colors.gray[700]}
                sx={{ transition: 'color .2s' }}
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
          {!expanded && (
            <Grid item xs={1}>
              <IconButton
                aria-label="expand"
                size="large"
                sx={{
                  border: '1px solid',
                  borderColor: colors.primary[500],
                }}
              >
                <Image src={expand} alt="expand" />
              </IconButton>
            </Grid>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="fs16" color={colors.gray[500]} mb="18px" display="block">
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default StyledAccordionItem;
