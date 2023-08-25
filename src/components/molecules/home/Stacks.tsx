import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { StacksInHome } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import { Typography } from '@mui/material';

function a11yProps(index: number) {
  return {
    id: `stack-tab-${index}`,
    'aria-controls': `stack-tabpanel-${index}`,
  };
}

export function StacksHome() {
  const isMobile = useBreakpoint(BreakPoints.LG);

  const [value, setValue] = React.useState(StacksInHome[0].id);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderTabs = StacksInHome.map((item, index) => {
    return (
      <Tab
        key={item.id}
        value={item.id}
        label={item.name}
        {...a11yProps(index)}
        sx={{
          background: 'white',
          fontSize: '14px',
          textTransform: 'none',
          color: 'black',
          fontWeight: 500,
          height: '48px',
          '&.Mui-selected': {
            background: 'black',
            lineHeight: 2,
            // height: '54px',
            color: 'white',
            // transition: 'height 0.2s',
          },
        }}
      />
    );
  });

  const renderContentTabs = StacksInHome.map((item, index) => {
    return (
      <div
        key={item.id}
        role="tabpanel"
        hidden={value !== item.id}
        id={`stack-tabpanel-${index}`}
        aria-labelledby={`stack-tab-${index}`}
        style={{
          backgroundColor: 'black',
          padding: '28px',
        }}
      >
        {value === item.id && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={{ xs: '28px', md: '50px' }}
            flexWrap={'wrap'}
          >
            {item.stacks.map((itemStack) => {
              return <Image key={itemStack.id} alt={itemStack.name} src={itemStack.imgSrc} />;
            })}
            {value === 'field-2' && (
              <Typography variant="fs16" color="white">
                🦜️🔗 LangChain
              </Typography>
            )}
          </Box>
        )}
      </div>
    );
  });

  return (
    <Box sx={{ width: '100%' }} mt="-54px">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="stacks tabs"
        centered={isMobile ? false : true}
        variant={isMobile ? 'scrollable' : 'standard'}
        scrollButtons={true}
        TabIndicatorProps={{
          style: {
            backgroundColor: 'transparent',
          },
        }}
        sx={{
          '& .MuiTabs-flexContainer': {
            alignItems: 'flex-end!important',
          },
        }}
      >
        {renderTabs}
      </Tabs>
      {renderContentTabs}
    </Box>
  );
}
