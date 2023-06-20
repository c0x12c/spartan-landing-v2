import { Stacks } from '@/constants/stacks';
import { Box, Grid } from '@mui/material';
import * as React from 'react';
import StackTag from './StackTag';
import SelectedStack from './SelectedStack';

interface IStacksContentProps {}

const StacksContent: React.FunctionComponent<IStacksContentProps> = (props) => {
  const [selectedStackId, setSelectedStackId] = React.useState(Stacks[0].id);
  const changeStack = (id: string) => {
    setSelectedStackId(id);
  };

  const renderServiceTags = Stacks.map((stack) => {
    return (
      <StackTag
        key={stack.id}
        {...stack}
        isActive={stack.id === selectedStackId}
        onClick={changeStack}
      />
    );
  });

  return (
    <Grid container rowGap="42px">
      <Grid item lg={3} xs={12}>
        <Box display="flex" flexDirection="column" rowGap="20px">
          {renderServiceTags}
        </Box>
      </Grid>
      <Grid item lg={9} xs={12}>
        <SelectedStack id={selectedStackId} />
      </Grid>
    </Grid>
  );
};

export default StacksContent;
