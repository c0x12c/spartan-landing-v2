import { AppBar, Toolbar, useMediaQuery, useTheme, Box } from '@mui/material';
import Image from 'next/image';
import Container from '../atoms/Container';
import CompanyLogo from '../../assets/images/Company-logo.svg';
import { MobileMenu } from '../atoms/MobileMenu';
import { HeaderNavigation } from '../atoms/HeaderNavigation';
import CompanyDarkLogo from '@/assets/images/Company-logo-dark.svg';
import { useRouter } from 'next/router';
import { ServiceType, Services } from '@/constants/services';
import { AboutType, About } from '@/constants/about';
import Link from 'next/link';

export type MenuItemDataType = {
  id: string;
  label: string;
  href?: string;
  hash?: string;
  subItems?: ServiceType[] | AboutType[];
};

const Header = () => {
  const { pathname } = useRouter();
  const isTransparent = pathname !== '/contact';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

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
        top: { xxl: '17px', xl: '25px', lg: '50', xs: 0 },
      }}
    >
      <Container>
        <Toolbar
          sx={{
            height: isMobile ? '142px' : 'auto',
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Link href="/">
              <Image src={isTransparent ? CompanyLogo : CompanyDarkLogo} alt="Spartan Logo" />
            </Link>

            {isMobile ? (
              <MobileMenu menu={dataMenu} isTransparent={isTransparent} />
            ) : (
              <HeaderNavigation menu={dataMenu} isTransparent={isTransparent} />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
