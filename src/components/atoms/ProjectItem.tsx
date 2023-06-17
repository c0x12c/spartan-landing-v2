/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import outerLink from '@/assets/images/outer-link-black.svg';

import { Box, Button, Link, Typography } from '@mui/material';
import Tag from './Tag';

interface IProjectItemProps {
  name: string;
  imgSrc: any;
  href: string;
  tags: string[];
  fullWidth?: boolean;
}

const ProjectItem: React.FunctionComponent<IProjectItemProps> = ({
  name,
  imgSrc,
  href,
  tags,
  fullWidth = false,
}) => {
  const renderTags = tags.map((tag, index) => {
    return (
      <Tag
        key={`tag-${index + 1}`}
        textTag={tag}
        sx={{ color: colors.primary[500], borderColor: colors.primary[500], padding: '10px 23px' }}
      />
    );
  });

  return (
    <React.Fragment>
      <Box maxWidth="502px">
        <Image
          src={imgSrc}
          alt="logo"
          style={{
            width: fullWidth ? '100%' : '502px',
            height: 'auto',
          }}
        />
        <Box display="flex" alignItems="center" flexWrap="wrap" gap="10px" mt="24px" mb="18px">
          {renderTags}
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="fs32" color={colors.base.black} letterSpacing="0.01em">
            {name}
          </Typography>
          <Link href={href}>
            <Image src={outerLink} alt="outerLink" />
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProjectItem;
