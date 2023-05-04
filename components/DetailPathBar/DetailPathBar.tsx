import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import icon from '../../public/arrow.svg';
import { useStyles } from './styles';

const DetailPathBar: React.FC = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <div className={classes.sortBarWrapper}>
      <div className={classes.pathBar}>
        <span className={classes.pathBarhome} onClick={handleClick}>
          Home
        </span>
        <Image className={classes.icon} src={icon} alt="Icon" />
        <span className={classes.pathBarDetail}>Detail Page</span>
      </div>
    </div>
  );
};

export default DetailPathBar;
