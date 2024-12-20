import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { StacksInHome } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';

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
            color: 'white',
          },
        }}
      />
    );
  });

  const renderContentTabs = StacksInHome.map((item, index) => {
    return (
      <TabPanel
        key={item.id}
        role="tabpanel"
        hidden={value !== item.id}
        id={`stack-tabpanel-${index}`}
        aria-labelledby={`stack-tab-${index}`}
        style={{
          backgroundColor: 'black',
          padding: '28px',
          alignItems: 'center',
        }}
        value={item.id}
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
              return (
                <Image key={itemStack.id} alt={itemStack.name} src={itemStack.imgSrc} height={25} />
              );
            })}
            {value === 'field-2' && (
              <Typography variant="fs16" color="white">
                🦜️🔗 LangChain
              </Typography>
            )}
          </Box>
        )}
      </TabPanel>
    );
  });

  return (
    <Box sx={{ width: '100%' }} zIndex={10}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="stacks tabs"
          centered={isMobile ? false : true}
          variant={isMobile ? 'scrollable' : 'standard'}
          scrollButtons={true}
          TabIndicatorProps={{
            style: {
              backgroundColor: 'black',
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
      </TabContext>
    </Box>
  );
}
