import React from 'react';
import { Box } from '@mui/material';
import PrimaryTitle from '@/components/atoms/typography/PrimaryTitle';
import { BodyText } from '@/components/atoms';
import { gray } from '@/styles/colors';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

export enum ContentType {
  List = 'list',
  Paragraph = 'paragraph',
  GroupedList = 'groupedList',
}

interface JobDetailsSectionProps {
  contentType: ContentType;
  title: string;
  text?: string;
  list?: string[];
  groupList?: { title: string; items: string[] }[];
}

const List = ({ items, isMobile }: { items: string[]; isMobile: boolean }) => (
  <ul style={{ listStyle: 'inside' }}>
    {items.map((item, index) => (
      <li key={index} style={{ fontSize: isMobile ? '14px' : '16px', color: gray[600] }}>
        {item}
      </li>
    ))}
  </ul>
);

const GroupedList = ({
  groupedItems,
  isMobile,
}: {
  groupedItems: { title: string; items: string[] }[];
  isMobile: boolean;
}) => (
  <Box display={'flex'} flexDirection={'column'} gap={'16px'}>
    {groupedItems.map((itemGroup, index) => (
      <Box key={index}>
        <BodyText
          text={itemGroup.title}
          sx={{
            fontWeight: 600,
            mb: '8px',
            color: base.black,
            fontSize: { xs: '18px', md: '18px' },
          }}
        />
        <List items={itemGroup.items} isMobile={isMobile} />
      </Box>
    ))}
  </Box>
);

const JobDetailsSection: React.FC<JobDetailsSectionProps> = ({
  contentType,
  title,
  text,
  list,
  groupList,
}) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderContent = () => {
    switch (contentType) {
      case ContentType.List:
        return list && <List items={list} isMobile={isMobile} />;
      case ContentType.Paragraph:
        return text && <BodyText text={text} sx={{ fontSize: { xs: '14px', md: '16px' } }} />;
      case ContentType.GroupedList:
        return groupList && <GroupedList groupedItems={groupList} isMobile={isMobile} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <PrimaryTitle text={title} sx={{ mb: '8px' }} />
      {renderContent()}
    </Box>
  );
};

export default JobDetailsSection;
