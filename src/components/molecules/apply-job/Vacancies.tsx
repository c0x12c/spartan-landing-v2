import { Container, Title } from '@/components/atoms';
import { vacancies, Job, JobTag, listJobTag, listExperienceLevel } from '@/constants/vacancies';
import { base, gray, primary } from '@/styles/colors';
import Arrow from '@/assets/images/icons/arrow-purple.svg';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { ExperienceLevel } from '@/constants/vacancies';
import { useState } from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Link from 'next/link';

const Vacancies = () => {
  const [teamFilter, setTeamFilter] = useState<JobTag>(JobTag['ALL_JOB']);
  const [levelFilter, setLevelFilter] = useState<ExperienceLevel>(ExperienceLevel['ALL_LEVEL']);

  const handleTeamChange = (event: SelectChangeEvent<JobTag>) => {
    setTeamFilter(event.target.value as JobTag);
  };

  const handleLevelChange = (event: SelectChangeEvent<ExperienceLevel>) => {
    setLevelFilter(event.target.value as ExperienceLevel);
  };

  const filteredVacancies = vacancies.filter((job) => {
    const isTeamMatch = teamFilter === JobTag['ALL_JOB'] || teamFilter === job.tag;
    const isLevelMatch =
      levelFilter === ExperienceLevel['ALL_LEVEL'] || job.experienceLevel.includes(levelFilter);
    return isTeamMatch && isLevelMatch;
  });

  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={{ xs: '24px', md: '79px' }}
        alignItems={'center'}
        width={'100%'}
      >
        <Box display={'flex'} gap={{ md: '44px', xs: '10px' }} width={{ sm: '60%', xs: '100%' }}>
          <FormControl fullWidth data-aos="zoom-in-left" data-aos-delay="300">
            <InputLabel id="team-filter">Team</InputLabel>
            <Select
              value={teamFilter}
              labelId="team-filter"
              id="team-select"
              label="Team"
              onChange={handleTeamChange}
              inputProps={{ sx: { padding: 0 } }}
              sx={{
                color: base.black,
                fontWeight: 600,
                borderRadius: '96px',
                borderColor: gray[600],
                p: '15px 32px',
              }}
            >
              {listJobTag.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.value}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth data-aos="zoom-in-right" data-aos-delay="400">
            <InputLabel id="level-filter">Level</InputLabel>
            <Select
              value={levelFilter}
              labelId="level-filter"
              id="level-select"
              label="Level"
              onChange={handleLevelChange}
              inputProps={{ sx: { padding: 0 } }}
              sx={{
                color: base.black,
                fontWeight: 600,
                borderRadius: '96px',
                borderColor: gray[600],
                p: '15px 32px',
              }}
            >
              {listExperienceLevel.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.value}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Title
          text={filteredVacancies.length + ' positions are vacant'}
          data-aos="zoom-in"
          data-aos-delay="500"
        />
        <List vacancies={filteredVacancies} />
      </Box>
    </Container>
  );
};

const List = ({ vacancies }: { vacancies: Job[] }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={{ md: '13px', xs: '24px' }}
      width="100%"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {vacancies.map((vacancy, index) => (
        <ListItem {...vacancy} key={vacancy.id} isLastItem={index === vacancies.length - 1} />
      ))}
    </Box>
  );
};

const ListItem = ({
  slug,
  position,
  tag,
  experienceLevel,
  enrollmentStatus,
  isLastItem,
}: Job & { isLastItem?: boolean }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Link href={`${slug}`}>
      <Box
        borderBottom={isLastItem ? 'none' : `1px solid ${gray[400]}`}
        p={{ md: '44px 32px', xs: '0 0 24px 0' }}
        display={'flex'}
        gap={isMobile ? '0' : '38px'}
        width={'100%'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ md: 'row', xs: 'column' }}
        sx={{
          ':hover': {
            bgcolor: primary[50],
            borderColor: primary[200],
          },
          transition: 'background-color 0.3s, border-color 0.3s',
        }}
      >
        <Box flex={1} mb={{ xs: '16px', sm: '0' }}>
          <Typography
            variant={isMobile ? 'fs18' : 'fs24'}
            component={'p'}
            mb={isMobile ? '8px' : '12px'}
            color={base.black}
          >
            {position}
          </Typography>
          <Typography
            component={'p'}
            variant="fs18"
            color={primary[400]}
            width={'fit-content'}
            borderRadius={'6px'}
            fontSize={isMobile ? '12px' : '18px'}
          >
            {listJobTag.find((item) => item.value === tag)?.name}
          </Typography>
        </Box>
        <Box flex={1} mb={isMobile ? '8px' : '0'}>
          <Typography
            variant={isMobile ? 'fs18' : 'fs24'}
            component={'p'}
            mb={isMobile ? '8px' : '12px'}
            color={base.black}
          >
            Competitive salary
          </Typography>
          <Typography
            component={'p'}
            variant="fs18"
            fontSize={isMobile ? '12px' : '18px'}
            color={gray[600]}
            textTransform={'uppercase'}
          >
            {experienceLevel} |{' '}
            <Typography
              component={'span'}
              variant="fs18"
              fontSize={isMobile ? '12px' : '18px'}
              color={primary[400]}
            >
              {enrollmentStatus.join(', ')}
            </Typography>
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size={isMobile ? 'small' : 'large'}
          endIcon={<Image src={Arrow} alt="arrow" width={24} />}
          sx={{ minWidth: 'fit-content' }}
        >
          Apply job
        </Button>
      </Box>
    </Link>
  );
};

export default Vacancies;
