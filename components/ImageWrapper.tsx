import React from 'react';
import { DetailData } from '@/pages/api/card/[id]';
import { useStyles } from './DetailStyles';

type Props = { detail: DetailData };

const ImageWrapper: React.FC<Props> = ({
  detail: { id, detailImage, title, description, price, nickname },
}: Props) => {
  const { classes } = useStyles();
  return (
    <div>
      {detailImage.map((image) => (
        <div className={classes.imgContainer}>
          <img src={image.replace('/public', '')} />
        </div>
      ))}
    </div>
  );
};

export default ImageWrapper;
