import React from 'react';
import Image from 'next/image';
import logo from '../../public/navTextLogo.svg';
import { useStyles } from './styles';

const Footer: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <Image src={logo} alt="Textlogo" width={103} height={17} />
      <ul className={classes.footerList}>
        <li>about us</li>
        <li>terms of service</li>
        <li>contact</li>
        <li>privacy policy</li>
      </ul>

      <div className={classes.footerRightText}>
        © 2023 KARTRADE LIMITED - ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
