import Link from 'next/link';
import Image from 'next/image';
import { base } from '@/styles/colors';

type SocialLinkType = {
  href: string;
  src: string;
  alt: string;
};

export const SocialLink: React.FunctionComponent<SocialLinkType> = ({ href, src, alt }) => {
  return (
    <Link
      href={href}
      style={{
        width: '45px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px solid ${base.white}`,
        borderRadius: '22.5px',
      }}
    >
      <Image src={src} style={{ width: '16px', color: base.white }} alt={alt} />
    </Link>
  );
};
