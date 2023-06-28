import { AppBar, Toolbar, Box } from '@mui/material';
import Image from 'next/image';
import CompanyLogo from '@/assets/images/Company-logo.svg';
import CompanyDarkLogo from '@/assets/images/Company-logo-dark.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { About, AboutType, ServiceType, Services } from '@/constants';
import { useBreakpoint, BreakPoints } from '@/hooks';
import { Container } from '@/components/atoms';

export type MenuItemDataType = {
  id: string;
  label: string;
  href?: string;
  hash?: string;
  subItems?: ServiceType[] | AboutType[];
};

export const Header = () => {
  const { pathname } = useRouter();
  const isTransparent = pathname !== '/contact';
  const isTablet = useBreakpoint(BreakPoints.LG);

  const dataMenu: MenuItemDataType[] = [
    {
      id: 'menu-item-1',
      label: 'Spartan',
      href: '/',
    },
    {
      id: 'menu-item-2',
      label: 'Services',
      subItems: Services,
    },
    {
      id: 'menu-item-3',
      label: 'Careers',
      subItems: About,
    },
  ];

  return (
    <AppBar
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        position: 'absolute',
        top: { lg: '25px', xs: 0 },
      }}
    >
      <Container>
        <Toolbar
          sx={{
            padding: 0,
            height: isTablet ? '142px' : 'auto',
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Link href="/">
              <Image src={isTransparent ? CompanyLogo : CompanyDarkLogo} alt="Spartan Logo" />
            </Link>

            {/* {isMobile ? (
              <MobileMenu menu={dataMenu} isTransparent={isTransparent} />
            ) : (
              <HeaderNavigation menu={dataMenu} isTransparent={isTransparent} />
            )} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
