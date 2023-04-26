import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useStyles } from './NavStyles';
import icon from '../public/navLogo.svg';
import textIcon from '../public/navTextLogo.svg';
import searchIcon from '../public/search.svg';
import profileIcon from '../public/profile.svg';
import likeIcon from '../public/like.svg';

interface Props {
  handleSearch: () => void;
  searchIconRef?: React.RefObject<HTMLImageElement> | null | undefined;
}

const Navbar: React.FC<Props> = ({ handleSearch, searchIconRef }: Props) => {
  const { classes } = useStyles();
  const router = useRouter();
  const navigateHome = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className={classes.navWrapper}>
      <div className={classes.logoContainer} onClick={navigateHome}>
        <Image alt="logoIcon" height={29} src={icon} />
        <Image alt="textLogo" height={15.4} width={182} src={textIcon} />
      </div>
      <div className={classes.menuContainer}>
        <Image alt="profile" width={25} src={profileIcon} />
        <Image
          alt="search"
          width={18}
          src={searchIcon}
          onClick={handleSearch}
          ref={searchIconRef}
        />
        <Image alt="likeIcon" width={18} src={likeIcon} />
      </div>
    </div>
  );
};
export default Navbar;
