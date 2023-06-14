import { Link, Typography, Box } from '@mui/material';
import { gray, primary } from '@/styles/colors';
import { ContactUsButton } from './buttons';
import { SetStateAction } from 'react';

const menuItems = [
  { label: 'Spartan', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
];

export const HeaderNavigation = ({
  activePage,
  handlePageChange,
}: {
  activePage: string;
  handlePageChange: (page: SetStateAction<string>) => void;
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '44px' }}>
      <nav>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} onClick={() => handlePageChange(item.label)}>
            <Typography
              variant="fs18"
              sx={{ color: activePage === item.label ? primary[500] : gray[200] }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}

        <style jsx>{`
          nav {
            display: flex;
            align-items: center;
            position: relative;
          }

          nav :global(a) {
            position: relative;
            margin-right: 8px;
            text-decoration: none;
            color: inherit;
          }

          nav :global(a):after {
            content: '/';
            margin-right: 16px;
            margin-left: 16px;
          }

          nav :global(a):last-child:after {
            display: none;
          }
        `}</style>
      </nav>
      <ContactUsButton />
    </Box>
  );
};
