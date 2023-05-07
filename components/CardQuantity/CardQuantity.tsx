import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useStyles } from '../Details/styles';
import plusIcon from '../../public/plus.svg';
import minusIcon from '../../public/minus.svg';

const CardQuntity: React.FC = () => {
  const { classes } = useStyles();
  const [cardQuantity, setQuantity] = useState(1);

  return (
    <div className={classes.quantityBox}>
      <div className={classes.quantityMargin}>Quantity</div>
      <div>
        <Image
          className={classes.quantityMargin}
          src={minusIcon}
          alt="minusIcon"
          width={38}
          onClick={() =>
            setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1))
          }
        />
      </div>
      <div className={`${classes.quantityMargin} ${classes.quantityNumber}`}>
        {cardQuantity}
      </div>
      <div>
        <Image
          className={classes.quantityMargin}
          src={plusIcon}
          width={38}
          alt="plusIcon"
          onClick={() => setQuantity((prevState) => prevState + 1)}
        />
      </div>
    </div>
  );
};

export default CardQuntity;