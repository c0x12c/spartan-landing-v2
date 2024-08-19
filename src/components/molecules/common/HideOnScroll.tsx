import React, { useState, useEffect, useCallback, FC } from 'react';
import Slide from '@mui/material/Slide';

type Props = {
  children: React.ReactElement;
};

export const HideOnScroll: FC<Props> = ({ children }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      // Hide header when scrolling down
      setShowHeader(false);
    } else if (currentScrollTop < lastScrollTop) {
      // Show header when scrolling up
      setShowHeader(true);
    }

    setLastScrollTop(currentScrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, lastScrollTop]);

  return (
    <Slide appear={false} direction="down" in={showHeader} timeout={300}>
      {children}
    </Slide>
  );
};
