import React from 'react';
import { useStyles } from './HomeImgStyles';

const HomeImage: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageBox}>
        <h2 className={classes.homeImgHeading}>We are creative tranders</h2>
        <p className={classes.homeP}>
          Sell, Trade, Buy all Kpop photocards across the World. We are here to
          enable K-Pop fans to instantly trade cards like never before
        </p>
      </div>
    </div>
  );
};

export default HomeImage;
