import { Box, Link } from '@mui/material';
import GooglePlay from '@/assets/images/stores/GooglePlay.svg';
import AppStore from '@/assets/images/stores/AppStore.svg';
import Image from 'next/image';

const DownloadAppPanel = ({
  linkAppStore,
  linkPlayStore,
}: {
  linkAppStore: string;
  linkPlayStore: string;
}) => {
  return (
    <Box
      display={'flex'}
      gap={'20px'}
      alignItems={'center'}
      data-aos="fade-up-left"
      data-aos-delay="300"
    >
      <Link href={linkAppStore} target="_blank" width={'calc((100% - 20px) / 2)'} height={'100%'}>
        <Image src={AppStore} alt="App Store" style={{ width: '100%', height: '100%' }} />
      </Link>
      <Link href={linkPlayStore} target="_blank" width={'calc((100% - 20px) / 2)'} height={'100%'}>
        <Image src={GooglePlay} alt="Google Play" style={{ width: '100%', height: '100%' }} />
      </Link>
    </Box>
  );
};

export default DownloadAppPanel;
