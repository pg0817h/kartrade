import React from 'react';
import { DetailData } from '@/pages/api/card/[id]';
import { useStyles } from '../Details/styles';

type Props = { detail: DetailData };

const ImageWrapper: React.FC<Props> = ({ detail: { detailImage } }: Props) => {
  const { classes } = useStyles();
  return (
    <div>
      {detailImage.map((image, key) => (
        <div className={classes.imgContainer} key={key}>
          <img src={image.replace('/public', '')} />
        </div>
      ))}
    </div>
  );
};

export default ImageWrapper;
