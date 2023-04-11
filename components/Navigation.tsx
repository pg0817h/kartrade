import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useStyles } from './NavStyles';
import icon from '../public/navLogo.svg';
import textIcon from '../public/navTextLogo.svg';
import searchIcon from '../public/search.svg';
import profileIcon from '../public/profile.svg';
import likeIcon from '../public/like.svg';

const Navbar: React.FC = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <div className={classes.navWrapper}>
      <div className={classes.logoContainer} onClick={handleClick}>
        <Image alt="logoIcon" height={29} src={icon} />
        <Image alt="textLogo" height={15.4} width={182} src={textIcon} />
      </div>
      <div className={classes.menuContainer}>
        <Image alt="profile" width={25} src={profileIcon} />
        <Image alt="search" width={18} src={searchIcon} />
        <Image alt="likeIcon" width={18} src={likeIcon} />
      </div>
    </div>
  );
};
export default Navbar;
