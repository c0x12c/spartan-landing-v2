import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { gray } from '@/styles/colors';
import { IBM_Plex_MonoFont } from '@/styles/muiTheme';

interface TechItem {
  id: string;
  name: string;
  imgSrc: string;
}

interface GridSectionProps {
  techItems: TechItem[];
}

const GridSection: React.FC<GridSectionProps> = ({ techItems }) => {
  return (
    <Grid container>
      {techItems.map((techItem: TechItem) => (
        <Grid key={techItem.id} item xs={12} sm={6} md={4} lg={4}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '30px 22px',
              alignItems: 'center',
              borderRadius: '6px',
              backgroundColor: gray[200],
              margin: '14px',
            }}
          >
            <Image src={techItem.imgSrc} alt={techItem.name} height={64} width={64} />
            <Typography
              gutterBottom
              color={gray[700]}
              sx={{ fontSize: '13px', fontWeight: 600, fontFamily: IBM_Plex_MonoFont.style }}
            >
              {techItem.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridSection;
