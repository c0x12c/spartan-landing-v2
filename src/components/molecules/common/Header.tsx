import { AppBar, Toolbar, Box } from '@mui/material';
import Image from 'next/image';
import LogoWhite from '@/assets/images/logo/logo-white.svg';
import LogoDark from '@/assets/images/logo/logo-dark.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { About, AboutType, ServiceType, Services } from '@/constants';
import { useBreakpoint, BreakPoints } from '@/hooks';
import { Container, MenuDesktop } from '@/components/atoms';
import { MenuMobile } from '@/components/atoms/common/MenuMobile';

export type MenuItemType = {
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

  const dataMenu: MenuItemType[] = [
    {
      id: 'menu-item-1',
      label: 'Spartan',
      href: '/',
    },
    {
      id: 'menu-item-2',
      label: 'Services',
      href: '/services',
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
              <Image src={isTransparent ? LogoWhite : LogoDark} alt="Spartan Logo" />
            </Link>

            {isTablet ? (
              <MenuMobile menu={dataMenu} isTransparent={isTransparent} />
            ) : (
              <MenuDesktop menu={dataMenu} isTransparent={isTransparent} />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
