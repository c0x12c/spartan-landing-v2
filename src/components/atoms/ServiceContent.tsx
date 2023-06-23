import * as React from 'react';
import { Services } from '@/constants/services';
import { Box, Grid } from '@mui/material';
import ServiceTag from './ServiceTag';
import { useRouter } from 'next/router';

interface IServiceContentProps {}

const ServiceContent: React.FunctionComponent<IServiceContentProps> = () => {
  const router = useRouter();
  const { pathname, asPath } = router;

  const [selectedServiceTag, setServiceTag] = React.useState('');
  const [selectComponent, setSelectedComponent] = React.useState<JSX.Element>(<></>);

  React.useEffect(() => {
    if (asPath.split('#')[1]) {
      setServiceTag(asPath.split('#')[1]);
      return;
    }
    setServiceTag(Services[0].hash);
  }, [asPath]);

  React.useEffect(() => {
    const idx = Services.findIndex((service) => service.hash === selectedServiceTag);
    const Component = Services[idx !== -1 ? idx : 0].component;
    setSelectedComponent(<Component />);
  }, [selectedServiceTag]);

  const changeServiceTag = (hash: string) => {
    setServiceTag(hash);
    router.push({
      pathname,
      hash,
    });
  };

  const renderServiceTags = Services.map((service, index) => {
    return (
      <ServiceTag
        key={service.id}
        index={index + 1}
        {...service}
        isActive={service.hash === selectedServiceTag}
        onClick={changeServiceTag}
      />
    );
  });

  return (
    <React.Fragment>
      <Grid container rowGap="42px">
        <Grid item lg={4.5} xs={12}>
          <Box display="flex" flexDirection="column" rowGap="4px">
            {renderServiceTags}
          </Box>
        </Grid>
        <Grid item lg={7.5} xs={12}>
          {selectComponent}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ServiceContent;
