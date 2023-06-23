import * as React from 'react';
import * as colors from '@/styles/colors';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import checked from '@/assets/images/case-volta/checked-icon.svg';

interface IAccordionItemWeDoProps {
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

const AccordionItemWeDo: React.FunctionComponent<IAccordionItemWeDoProps> = ({
  title,
  content,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary aria-controls="panel-content">
        <Grid container alignItems="center">
          <Grid item xs={1.5} display="flex" alignItems="center">
            <Image src={checked} alt="checked" />
          </Grid>
          <Grid item xs={10.5}>
            <Typography
              variant={'fs24'}
              color={expanded ? colors.primary[500] : colors.gray[700]}
              sx={{ transition: 'color .2s' }}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={10.5}>
            <Typography variant="fs16" color={colors.gray[500]} mb="18px" display="block">
              {content}
            </Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItemWeDo;
