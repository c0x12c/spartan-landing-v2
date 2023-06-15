import * as React from 'react';
import * as colors from '@/styles/colors';
import { Button } from '@mui/material';

interface ITagSkillProps {
  text: string;
}

const TagSkill: React.FunctionComponent<ITagSkillProps> = ({ text }) => {
  return (
    <Button
      sx={{
        bgcolor: colors.base.white,
        padding: '10px 14px',
        fontSize: '13px',
        border: '1px solid',
        borderRadius: '34px',
        borderColor: colors.gray[300],
        color: colors.base.black,
        lineHeight: 1,
        '&:hover': {
          bgcolor: colors.base.white,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default TagSkill;
