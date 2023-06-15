import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowButton from '@/assets/images/Arrow-contact-dark.svg';
import { primary } from '@/styles/colors';

type LinkButtonProps = {
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href }) => (
  <Link
    href={href}
    style={{
      border: `1.125px solid ${primary[500]}`,
      borderRadius: '22.5px',
      width: '45px',
      height: '45px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }}
  >
    <Image src={ArrowButton} alt="Arrow" />
  </Link>
);

export default LinkButton;
