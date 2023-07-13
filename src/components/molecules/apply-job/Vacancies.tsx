import { Container, Title } from '@/components/atoms';
import { vacancies, Job } from '@/constants/vacancies';
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

const Vacancies = () => {
  const [teamFilter, setTeamFilter] = useState<string>('All Team');
  const [levelFilter, setLevelFilter] = useState<ExperienceLevel | 'All Level'>('All Level');

  const handleTeamChange = (event: SelectChangeEvent<string>) => {
    setTeamFilter(event.target.value);
  };

  const filteredVacancies = vacancies.filter((job) => {
    const isTeamMatch = teamFilter === 'All Team' || teamFilter === job.tags;
    const isLevelMatch = levelFilter === 'All Level' || job.experience_level.includes(levelFilter);
    return isTeamMatch && isLevelMatch;
  });

  const handleLevelChange = (event: SelectChangeEvent<ExperienceLevel | 'All Level'>) => {
    setLevelFilter(event.target.value as ExperienceLevel | 'All Level');
  };

  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={{ xs: '24px', sm: '79px' }}
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
              <MenuItem value="All Team">All Team</MenuItem>
              <MenuItem value="frontend">Frontend</MenuItem>
              <MenuItem value="backend">Backend</MenuItem>
              <MenuItem value="design">Design</MenuItem>
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
              <MenuItem value="All Level">All Level</MenuItem>
              <MenuItem value="trainee">Trainee</MenuItem>
              <MenuItem value="junior">Junior</MenuItem>
              <MenuItem value="middle">Middle</MenuItem>
              <MenuItem value="senior">Senior</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Title
          text={filteredVacancies.length + ' positions are vacant now'}
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
    <Box width={'100%'}>
      {vacancies.map((vacancy, index) => (
        <ListItem {...vacancy} key={vacancy.id} isLastItem={index === vacancies.length - 1} />
      ))}
    </Box>
  );
};

const ListItem = ({
  id,
  position,
  salary,
  tags,
  experience_level,
  employment_type,
  isLastItem,
}: Job & { isLastItem?: boolean }) => {
  return (
    <Box
      borderBottom={isLastItem ? 'none' : `1px solid ${gray[400]}`}
      data-aos="flip-left"
      data-aos-delay="300"
      id={id}
      p={{ sm: '32px 44px', xs: '25px 0' }}
      display={'flex'}
      gap={'32px'}
      width={'100%'}
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      flexDirection={{ sm: 'row', xs: 'column' }}
    >
      <Box display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} width={'100%'}>
        <Box width={'100%'} mb={{ xs: '16px', sm: '0' }}>
          <Typography variant="fs24" component={'p'} mb={'15px'} color={base.black}>
            {position}
          </Typography>
          <Typography
            component={'p'}
            variant="fs18"
            color={primary[400]}
            width={'fit-content'}
            borderRadius={'6px'}
          >
            {tags}
          </Typography>
        </Box>
        <Box width={'100%'}>
          <Typography variant="fs24" component={'p'} mb={'15px'} color={base.black}>
            Up to {salary}$
          </Typography>
          <Typography component={'p'} variant="fs18" color={gray[600]} textTransform={'uppercase'}>
            {experience_level.join(', ')} |{' '}
            <Typography component={'span'} color={primary[400]}>
              {employment_type}
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Button
        variant="outlined"
        endIcon={<Image src={Arrow} alt="arrow" width={24} />}
        sx={{ minWidth: 'fit-content' }}
      >
        Apply now
      </Button>
    </Box>
  );
};

export default Vacancies;
