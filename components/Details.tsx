import React from 'react';
import Image from 'next/image';
import { DetailData } from '@/pages/api/card/[id]';
import ImageWrapper from './ImageWrapper';
import CardQuntity from './CardQuantity';
import { useStyles } from './DetailStyles';
import icon from '../public/message.svg';

type Props = { details: DetailData[] };

const Details: React.FC<Props> = ({ details }: Props) => {
  const [detail] = details;
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <div className={classes.profileContainer}>
            <div className={classes.profileBox}>
              <img
                className={classes.imgNickname}
                src={detail.detailImage[0].replace('/public', '')}
              />
              <div>@{detail.nickname}</div>
            </div>
            <div className={classes.messageBox}>
              <Image src={icon} alt="Icon" className={classes.messageIcon} />
              <span>Send Message</span>
            </div>
          </div>
          <div className={classes.infoContainer}>
            <h3 className={classes.infoHeader}>{detail.title}</h3>
            <p className={classes.infoDescription}>{detail.description}</p>
            <h3 className={classes.infoHeader}>USD {detail.price}</h3>
            <p className={classes.taxDescription}>
              Local Taxes included (where applicable)
            </p>
          </div>
        </div>
        <ImageWrapper key={detail.id} detail={detail} />
        <CardQuntity />
      </div>
    </>
  );
};

export default Details;
