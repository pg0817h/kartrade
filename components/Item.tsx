import React from 'react';
import { CardData } from '@/pages/api/cards';
import { useStyles } from './ItemsStyles';

type Props = { post: CardData };
const Item: React.FC<Props> = ({
  post: { mainImage, title, description, price, nickname },
}: Props) => {
  const newPath = mainImage.replace('/public', '');
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={newPath} />
        <div className={classes.profileContainer}>
          <img className={classes.imgNickname} src={newPath} />
          <div className={classes.nickNameTxt}>{`@${nickname}`}</div>
        </div>
      </div>
      <section className={classes.descContainer}>
        <h4 className={classes.descTitle}>{title}</h4>
        <div className={classes.descDetail}>{description}</div>
        <div className={classes.descPrice}>{`USD ${price}`}</div>
      </section>
    </div>
  );
};
export default Item;
