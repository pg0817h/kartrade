import { CardData } from '@/pages/api/get-cards';
import { useStyles } from './ItemsStyles';

type Props = { post: CardData };
export default function Item({
  post: { id, mainImage, title, description, price, detailImage, nickname },
}: Props) {
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
}
