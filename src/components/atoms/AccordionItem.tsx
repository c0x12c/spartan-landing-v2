import * as React from 'react';
import * as colors from '@/styles/colors';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import TagSkill from './TagSkill';
import Image from 'next/image';
import outerLinkSmall from '@/assets/images/outer-link-small.svg';
import expand from '@/assets/images/expand.svg';
import Link from 'next/link';

interface IAccordionItemProps {
  index: number;
  label: string;
  skills: string[];
  content: string;
  link: string;
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

const AccordionItem: React.FunctionComponent<IAccordionItemProps> = ({
  index,
  label,
  content,
  skills,
  link,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const renderSkills = skills.map((skill, index) => {
    return <TagSkill key={`skill-${index + 1}`} text={skill} />;
  });

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
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
          <Grid item xs={expanded ? 10.5 : 9}>
            <Typography
              variant={matches ? 'fs28' : 'fs40'}
              letterSpacing="0.01em"
              color={expanded ? colors.primary[500] : colors.gray[800]}
              sx={{ transition: 'color .2s' }}
            >
              {label}
            </Typography>
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
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={1.5}></Grid>
          <Grid item xs={10.5}>
            <Box display="flex" flexWrap="wrap" my="18px" gap="12px">
              {renderSkills}
            </Box>
            <Typography variant="fs16" color={colors.gray[500]} mb="18px" display="block">
              {content}
            </Typography>
            <Box display="flex" gap="18px" alignItems="center">
              <Link href={link}>
                <Button
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.14,
                    fontSize: '16px',
                    letterSpacing: '-0.13px',
                    color: colors.base.black,
                    padding: '10.5px',
                    textDecoration: 'none',
                  }}
                >
                  Learn more
                </Button>
              </Link>
              <Link href={link}>
                <IconButton
                  aria-label="learn-more"
                  size="large"
                  sx={{
                    border: '1px solid',
                    borderColor: colors.primary[500],
                  }}
                >
                  <Image src={outerLinkSmall} alt="outerLinkSmall" />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
