import { Button, Typography } from "@mui/material";
import Image from 'next/image'
import ArrowContact from '../../../assets/images/Arrow-contact.svg';
import { base } from '@/styles/colors';

export default function ContactUsButton() {
    return (
    <>
    <Button
        variant="outlined"
        sx={{
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          borderRadius: '60.5811px',
          color: base.white
        }}
      >
      <Typography variant='allVarints'>Contact Us</Typography>
      <Image src={ArrowContact} alt="Company Logo" />
    </Button></>
    )
}