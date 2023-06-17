import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProjectItem from '@/components/atoms/ProjectItem';
import { CaseStudies, CaseStudyType } from '@/constants/case-study';

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const renderProjects = (data: CaseStudyType[]) => {
    return data.map((item, index) => {
      return (
        <Box my="32px" key={item.id} maxWidth="502px" mx={matchesDesktop ? 0 : 'auto'}>
          <ProjectItem {...item} fullWidth />
          {index !== data.length - 1 && (
            <Box mt="32px" width="100%" height="1px" bgcolor={colors.gray[400]} />
          )}
        </Box>
      );
    });
  };
  return (
    <React.Fragment>
      <Box borderTop="1px solid" borderColor={colors.gray[400]}>
        {matchesDesktop ? (
          <Box display="flex" flexDirection="row" columnGap="47px">
            <Box borderRight="1px solid" borderColor={colors.gray[400]} pr="47px" pt="4px">
              {renderProjects(CaseStudies.slice(0, 3))}
            </Box>
            <Box pt="4px">
              <BoxProjects />
              {renderProjects(CaseStudies.slice(3))}
            </Box>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent="center" maxWidth="502px" width="100%" mx="auto">
              <BoxProjects />
            </Box>
            {renderProjects(CaseStudies)}
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
};

const BoxProjects = ({ matchesDesktop = true }: { matchesDesktop?: boolean }) => {
  return (
    <Box
      maxWidth="502px"
      width="100%"
      bgcolor={colors.primary[500]}
      py="24px"
      display="flex"
      justifyItems="center"
      justifyContent="center"
      gap="13px"
      mt="32px"
      mx={!matchesDesktop ? 'auto' : 0}
    >
      <Typography
        variant="fs40"
        letterSpacing={'-0.035em'}
        color={colors.base.black}
        lineHeight={'unset'}
      >
        50+
      </Typography>
      <Typography
        variant="fs22"
        color={colors.base.black}
        maxWidth="152px"
        borderLeft="1px solid"
        borderColor={colors.gray[300]}
        pl="13px"
      >
        Implemented projects in IT
      </Typography>
    </Box>
  );
};

export default Projects;
