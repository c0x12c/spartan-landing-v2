import { AppBar, Toolbar, Box } from '@mui/material';
import Image from 'next/image';
import LogoWhite from '@/assets/images/logo/logo-white.svg';
import LogoDark from '@/assets/images/logo/logo-dark.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { About, AboutType, ServiceType, Services } from '@/constants';
import { useBreakpoint, BreakPoints } from '@/hooks';
import { Container, MenuDesktop } from '@/components/atoms';
import { MenuMobile } from '@/components/atoms';
import questionIcon from '@/assets/images/icons/question.svg';
import cases from '@/assets/images/icons/cases.svg';

export type MenuItemType = {
  id: string;
  label: string;
  href?: string;
  hash?: string;
  subItems?: ServiceType[] | AboutType[];
};

export const Header = ({ forceTransparent = true }: { forceTransparent?: boolean }) => {
  const { pathname } = useRouter();
  const isTransparent =
    pathname !== '/contact-us' &&
    pathname !== '/life-spartan' &&
    pathname !== '/internship-program' &&
    pathname !== '/ready-to-join' &&
    pathname !== '/apply-job';

  const isTablet = useBreakpoint(BreakPoints.LG);

  const dataMenu: MenuItemType[] = [
    {
      id: 'menu-item-1',
      label: 'Spartan',
      href: '/',
      subItems: [
        {
          id: 'spartan-1',
          label: 'How Spartan operates',
          href: '/spartan-operates',
          content: 'We follow robust engineering processes refined years of experience',
          icon: questionIcon,
          detail: [],
        },
        {
          id: 'spartan-2',
          label: 'Case Study',
          href: '/case-study',
          content: 'Turning ideas into effective and engaging digital experiences.',
          icon: cases,
          detail: [],
        },
      ],
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
            padding: '0 !important',
            height: isTablet ? '142px' : 'auto',
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Link href="/">
              <Image
                src={isTransparent && forceTransparent ? LogoWhite : LogoDark}
                alt="Spartan Logo"
              />
            </Link>

            {isTablet ? (
              <MenuMobile menu={dataMenu} isTransparent={isTransparent && forceTransparent} />
            ) : (
              <MenuDesktop menu={dataMenu} isTransparent={isTransparent && forceTransparent} />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
