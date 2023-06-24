import { Box, Link } from '@mui/material';
import GooglePlay from '../../assets/images/google-play.svg';
import AppStore from '../../assets/images/app-store.svg';
import Image from 'next/image';

const DownloadAppPanel = () => {
  return (
    <Box display={'flex'} gap={'20px'} alignItems={'center'}>
      <Link
        href="https://play.google.com/store/games"
        width={'calc((100% - 20px) / 2)'}
        height={'100%'}
      >
        <Image src={GooglePlay} alt="Google Play" style={{ width: '100%', height: '100%' }} />
      </Link>
      <Link
        href="https://www.apple.com/app-store/"
        width={'calc((100% - 20px) / 2)'}
        height={'100%'}
      >
        <Image src={AppStore} alt="App Store" style={{ width: '100%', height: '100%' }} />
      </Link>
    </Box>
  );
};

export default DownloadAppPanel;
