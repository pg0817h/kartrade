import React from 'react';
import { DetailData } from '@/pages/api/card/[id]';
import { useStyles } from './ItemsStyles';

type Props = { detail: DetailData };

const Detail: React.FC<Props> = ({
  detail: { id, detailImage, title, description, price, nickname },
}: Props) => {
  const { classes } = useStyles();
  console.log('detailImage', detailImage);
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        {detailImage.map((image) => (
          <img src={image.replace('/public', '')} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
